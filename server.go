package main

import (
	"fmt"
	"github.com/go-pg/pg"
	//"github.com/go-pg/pg/orm"
	"github.com/labstack/echo"
	"net/http"
)

type Event struct {
	Title string `json:"title"`
	Link  string `json:"link"`
	Start string `json:"start"`
	//	End 	string
}

type Events []Event

type repo struct {
	db *pg.DB
}

func (repo *repo) getJson(c echo.Context) error {
	var events Events
	err := repo.db.Model(&events).Select()
	if err != nil {
		fmt.Println("getJsonErr")
		return err
	}
	fmt.Println(events)
	return c.JSON(http.StatusOK, events)
}

func (repo *repo) restartSchema() error {
	_, err := repo.db.Exec(`
		DROP SCHEMA public CASCADE;
		CREATE SCHEMA public;
		CREATE TABLE events
		(
			title 	text,
			link 	text,
			start 	text
		);
	`)
	return err
}

func (repo *repo) addEvent(event Event) error { //can in favour of just orming directly?
	err := repo.db.Insert(&event)
	if err != nil {
		fmt.Println("insert err")
		fmt.Println(err)
	}
	return err
}

func (repo *repo) addEvents(events Events) error {
	var err error
	for i := 0; i < len(events); i++ {
		err = repo.addEvent(events[i])
	}
	return err
}

func main() {
	e := echo.New()

	repo := repo{
		pg.Connect(&pg.Options{
			User:     "postgres",
			Password: "",
			Database: "tangodb",
		}),
	}
	repo.restartSchema() //remove for persistent schema

	var events = Events{
		Event{
			"event1",
			"event1.event",
			"2019-06-13",
		},
		Event{
			"event2",
			"event2.event",
			"2019-06-17",
		},
		Event{
			"event3",
			"event3.event",
			"2019-06-18",
		},
	}
	repo.addEvents(events)

	e.Static("/", "view")
	e.GET("/jsonevent", repo.getJson)

	e.Logger.Fatal(e.Start(":1323"))
}

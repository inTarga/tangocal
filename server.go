package main

import (
	//"encoding/json"
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
		fmt.Println("getJsonErr") //replace with logging
		return err
	}
	return c.JSON(http.StatusOK, events)
}

func (repo *repo) restartSchema(c echo.Context) error {
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
	fmt.Println("reset") //replace with logging
	return err
}

func (repo *repo) placeholderEvents(c echo.Context) error {
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
	fmt.Println("placeholder") //remove...
	return repo.addEvents(events)
}

func (repo *repo) addEvent(event Event) error { //can in favour of just orming directly?
	err := repo.db.Insert(&event)
	if err != nil {
		fmt.Println("insert err") //replace with loggging
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

func (repo *repo) submitEvent(c echo.Context) error {
	var event Event
	err := c.Bind(&event)
	if err != nil {
		fmt.Println("Bind Error")
		fmt.Println(err)
	}
	fmt.Println(c.ParamValues())
	fmt.Println("adding custom event") //todo remove
	fmt.Println(event)
	return repo.addEvent(event)
}

func main() {
	e := echo.New()

	repo := repo{
		pg.Connect(&pg.Options{
			User:     "postgres",
			Password: "", //offload to ignored file before deployment fool...
			Database: "tangodb",
		}),
	}

	e.Static("/", "view")
	e.GET("/jsonevent", repo.getJson)
	e.POST("/reset", repo.restartSchema)
	e.POST("/placeholder", repo.placeholderEvents)
	e.POST("/addevent", repo.submitEvent)

	e.Logger.Fatal(e.Start(":1323"))
}

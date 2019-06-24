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
	Title   string `json:"title"`
	Url     string `json:"url"`
	Start   string `json:"start"`
	End     string `json:"end"`
	Type    string `json:"type"`
	Desc    string `json:"desc"`
	Bgcol   string `json:"backgroundColor"`
	Bordcol string `json:"borderColor"`
	Textcol string `json:"textColor"`
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
			url 	text,
			start 	text,
			"end" 	text,
			type 	text,
			"desc" 	text,
			bgcol 	text,
			bordcol text,
			textcol text
		);
	`)
	fmt.Println("reset") //replace with logging
	fmt.Println(err)
	return err
}

func (repo *repo) placeholderEvents(c echo.Context) error {
	var events = Events{
		Event{
			"event1",
			"event1.event",
			"2019-06-23T22:00:00",
			"2019-06-23T23:00:00",
			"Klasse",
			"Desc1",
			"#5cb85c",
			"#5cb85c",
			"#f8f8f0",
		},
		Event{
			"event2",
			"event2.event",
			"2019-06-27T22:00:00",
			"2019-06-27T23:00:00",
			"Milonga",
			"Desc2",
			"#5bc0de",
			"#5bc0de",
			"#f8f8f0",
		},
		Event{
			"event3",
			"event3.event",
			"2019-06-28T22:00:00",
			"2019-06-28T23:00:00",
			"Workshop",
			"Desc3",
			"#f0ad4e",
			"#f0ad4e",
			"#f8f8f0",
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

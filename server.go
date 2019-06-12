package main

import (
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

func hwhandler(c echo.Context) error {
	return c.String(http.StatusOK, "Hello, World!")
}

func indexHandler(c echo.Context) error {
	return c.File("view/index.html")
}

func getJson(c echo.Context) error {
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
	return c.JSON(http.StatusOK, events)
}

func main() {
	e := echo.New()
	//e.GET("/", indexHandler)
	e.Static("/", "view")
	e.GET("/jsonevent", getJson)
	e.Logger.Fatal(e.Start(":1323"))
}

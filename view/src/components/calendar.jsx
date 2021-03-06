import React from "react";
import { Button } from "react-bootstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import bootstrapPlugin from "@fullcalendar/bootstrap";
import nbLocale from "@fullcalendar/core/locales/nb";
import enLocale from "@fullcalendar/core/locales/en-gb";

import "../main.scss";

class Cal extends React.Component {
  calendarComponentRef = React.createRef();
  state = {
    calendarWeekends: true,
    locale: nbLocale
  };

  render() {
    return (
      <div className="cal-app">
        <div className="cal-app-calendar">
          <FullCalendar
            defaultView="listWeek"
            header={{
              left: "prev,next today",
              right: "title"
            }}
            footer={{
              center: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
            }}
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
              bootstrapPlugin
            ]}
            ref={this.calendarComponentRef}
            weekends={this.state.calendarWeekends}
            events={this.props.events}
            dateClick={this.handleDateClick}
            locale={this.props.locale == "nb" ? nbLocale : enLocale}
            themeSystem="bootstrap"
          />
        </div>
      </div>
    );
  }

  toggleWeekends = () => {
    this.setState({
      // update a property
      calendarWeekends: !this.state.calendarWeekends
    });
  };

  gotoPast = () => {
    let calendarApi = this.calendarComponentRef.current.getApi();
    calendarApi.gotoDate("2000-01-01"); // call a method on the Calendar object
  };

  handleDateClick = arg => {
    if (confirm("Would you like to add an event to " + arg.dateStr + " ?")) {
      this.setState({
        // add new event data
        calendarEvents: this.state.calendarEvents.concat({
          // creates a new array
          title: "New Event",
          start: arg.date,
          allDay: arg.allDay
        })
      });
    }
  };
}
export default Cal;

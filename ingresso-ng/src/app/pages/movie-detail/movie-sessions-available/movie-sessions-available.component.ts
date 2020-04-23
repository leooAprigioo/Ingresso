import { Component, OnInit, Input } from '@angular/core';
import { iSessionRoom } from 'src/app/interfaces/iSessionRoom';
import { iSessionMovieFilter } from 'src/app/interfaces/iSessionMovieFilter';
import { Sessao } from 'src/app/models/sessao';

@Component({
  selector: 'app-movie-sessions-available',
  templateUrl: './movie-sessions-available.component.html',
  styleUrls: ['./movie-sessions-available.component.css']
})
export class MovieSessionsAvailableComponent implements OnInit {

  @Input() sessions: iSessionRoom[]
  @Input() filter: iSessionMovieFilter;

  public filteredSessions: iSessionRoom[];

  constructor() { }

  ngOnInit() {
  }

  getHoursWithoutSec(date: Date) {
    return date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
  }

  getFilteredSession() {
    this.filteredSessions = []

    if (!this.filter.isDub && !this.filter.isLeg && !this.filter.is2d && !this.filter.is3d) {
      this.clearFilter();
      return this.filteredSessions;
    }

    if (this.filter.isDub) {
      this.filterDub();
    }

    if (this.filter.isLeg) {
      this.filterLeg();
    }

    if ((this.filter.is2d && !this.filter.isDub) && (this.filter.is2d && !this.filter.isLeg)) {
      this.filter2d();
    }

    if ((this.filter.is3d && !this.filter.isDub) && (this.filter.is3d && !this.filter.isLeg)) {
      this.filter3d();
    }

    this.filteredSessions.sort((a, b) => {
      let nameA = a.roomName.toUpperCase();
      let nameB = b.roomName.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }

      if (nameA > nameB) {
        return 1;
      }

      return 0;
    })
    return this.filteredSessions;

  }

  addSession(room: iSessionRoom, sessions: Sessao[]) {
    let notFounded = [];
    sessions.forEach(session => {
      if (!room.sessions.find(sess => sess.id === session.id)) {
        notFounded.push(session)
      }
    });
    return room.sessions.concat(notFounded);
  }

  addRoom(room: iSessionRoom, concat: boolean = true) {
    let index = this.filteredSessions.findIndex(r => r.roomName === room.roomName);
    if (index > -1 ) {
      if (concat) {
        this.filteredSessions[index].sessions = this.addSession(this.filteredSessions[index], room.sessions)
      } else {
        this.filteredSessions[index].sessions = room.sessions
      }
    } else {
      this.filteredSessions.push(room);
    }

  }

  filterDub() {
    this.sessions.forEach(sessionRoom => {
      let room: iSessionRoom = {};
      if (this.getDub(sessionRoom.sessions).length > 0 ) {
        room = Object.assign(room, sessionRoom)
        room.sessions = this.getDub(sessionRoom.sessions);

        let withFilter = [];
        if (this.filter.is2d) {
          withFilter = withFilter.concat(this.get2d(room.sessions));
        }

        if (this.filter.is3d) {
          withFilter = withFilter.concat(this.get3d(room.sessions));
        }
        
        if (this.filter.is2d || this.filter.is3d) {
          room.sessions = withFilter;
        }

        if (room.sessions.length > 0) {
          this.addRoom(room);
        }
      }
    })
  }

  filterLeg() {
    this.sessions.forEach(sessionRoom => {
      let room: iSessionRoom = {};
      if (this.getLeg(sessionRoom.sessions).length > 0 ) {
        room = Object.assign(room, sessionRoom)
        room.sessions = this.getLeg(sessionRoom.sessions);

        let withFilter = [];
        if (this.filter.is2d) {
          withFilter = withFilter.concat(this.get2d(room.sessions));
        }

        if (this.filter.is3d) {
          withFilter = withFilter.concat(this.get3d(room.sessions));
        }
        
        if (this.filter.is2d || this.filter.is3d) {
          room.sessions = withFilter;
        }

        if (room.sessions.length > 0) {
          this.addRoom(room);
        }
      }
    })
  }

  filter2d() {
    this.sessions.forEach(sessionRoom => {
      let room: iSessionRoom = {};
      if (this.get2d(sessionRoom.sessions).length > 0 ) {
        room = Object.assign(room, sessionRoom)
        room.sessions = this.get2d(sessionRoom.sessions);
        this.addRoom(room);
      }
    })
  }

  filter3d() {
    this.sessions.forEach(sessionRoom => {
      let room: iSessionRoom = {};
      if (this.get3d(sessionRoom.sessions).length > 0 ) {
        room = Object.assign(room, sessionRoom)
        room.sessions = this.get3d(sessionRoom.sessions);
        this.addRoom(room);
      }
    })
  }

  clearFilter() {
    this.filteredSessions = this.sessions
  }

  getDub(sessions: Sessao[]) {
    return sessions.filter(session => session.dublado)
  }

  getLeg(sessions: Sessao[]) {
    return sessions.filter(session => !session.dublado)
  }

  get2d(sessions: Sessao[]) {
    return sessions.filter(session => session.formato == '2D')
  }

  get3d(sessions: Sessao[]) {
    return sessions.filter(session => session.formato == '3D')
  }

}

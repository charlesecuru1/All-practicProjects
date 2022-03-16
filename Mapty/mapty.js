'use strict';

const form = document.querySelector('.form');
const containerWorkOuts = document.querySelector('.workouts');
const formInputType = document.querySelector('.form-input--type');
const inputDistance = document.querySelector('.form-input-distance');
const inputDuration = document.querySelector('.form-input-duration');
const inputCadence = document.querySelector('.form-input-cadence');
const inputElevation = document.querySelector('.form-input-elevation');

// -----------------------------------------------------------------------------------------------

// parent workout class
class Workout {
  date = new Date();

  id = (Date.now() + '').slice(-10);

  //just for fun like for passing a public interface of your applicatio
  clicks = 0;

  constructor(coords, distance, duration) {
    this.coords = coords; //[latitude,longitude]
    this.distance = distance; //in Km
    this.duration = duration; ///in Min
  }
  _setDescription() {
    //prettier-ignore
    const months = [
      'January','Feburary','March','April','May','June','July','August','September','October','November', 'December', ];
    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }

  //public interface method applicaion
  //   click() {
  //     this.clicks++;
  //   }
}

// Running class
class Running extends Workout {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calPace();
    this._setDescription();
  }

  calPace() {
    this.pace = this.duration / this.distance;
    return this.pace;
  }
  //   click() {
  //     this.clicks++;
  //   }
}

// cycling class
class Cycling extends Workout {
  type = 'cycling';
  constructor(coords, distance, duration, elevation) {
    super(coords, distance, duration);
    this.elevation = elevation;
    // this.cycling = cycling;
    this.calcSpeed();
    this._setDescription();
  }

  calcSpeed() {
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}
// .........

// const run1 = new Running([39, -121], 5.2, 24, 182);
// const cycl = new Cycling([39, -121], 5.2, 24, 182);

// console.log(run1);
// console.log(cycl);

//////////////////////////////
// ARCHITECTURE OF THE APP
class App {
  #map;
  #mapZoomLevel = 13;
  #mapEvent;
  #WorkOut = [];

  constructor() {
    //get users position
    this._getPosition();

    //get data from local storage
    this._getLocalStorage();

    form.addEventListener('submit', this._newWorkOut.bind(this));
    formInputType.addEventListener('change', this._toggleElevationField);
    containerWorkOuts.addEventListener('click', this._moveToPopup.bind(this));
  }
  _getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert(`Can not get your position!`);
        }
      );
  }

  _loadMap(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coord = [latitude, longitude];
    // console.log(this);
    this.#map = L.map('map').setView(coord, this.#mapZoomLevel);

    //   console.log(map);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    //   handling clicks on map
    this.#map.on('click', this._showForm.bind(this));
    //load stored workout markers on page load
    this.#WorkOut.forEach((workM) => this._renderWorkoutMarker(workM));
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _hideForm() {
    //empty the input values
    inputDistance.value = inputCadence.value = inputDuration.value = '';
    //add style of noneimmediately
    form.style.display = 'none';
    //hide form
    form.classList.add('hidden');
    setTimeout(() => (form.style.display = 'grid'), 1000);
  }
  _toggleElevationField() {
    inputElevation.closest('.form-row').classList.toggle('form-row-hidden');
    inputCadence.closest('.form-row').classList.toggle('form-row-hidden');
  }

  _newWorkOut(e) {
    //checking for numbers
    const validInputs = (...inputs) =>
      inputs.every((inp) => Number.isFinite(inp));

    //checking for positive number
    const allPositive = (...inputs) => inputs.every((inpu) => inpu > 0);

    e.preventDefault();

    const { lat, lng } = this.#mapEvent.latlng;

    ///get data from the forms
    const type = formInputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    let workout;
    //if workout running, create running object

    if (type === 'running') {
      const cadence = +inputCadence.value;

      //check if data is valid
      if (
        // !Number.isFinite(distance) ||
        // !Number.isFinite(duration) ||
        // !Number.isFinite(cadence)
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert('input have to be positive numbers');

      workout = new Running([lat, lng], distance, duration, cadence);
    }

    //if activity cycling, create cycling object
    if (type === 'cycling') {
      const elevation = +inputElevation.value;

      if (
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration)
      )
        return alert('Inputs must be positive numbers!');
      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    //add new object to workout array
    console.log(workout);

    this.#WorkOut.push(workout);

    //Render workout on map as  marker
    this._renderWorkoutMarker(workout);
    //render new workout on the list

    this._renderWorkout(workout);
    //Hide the form  and clear input fields

    //clear input fields
    this._hideForm();

    // set local storage to all workouts
    this._setLocalStorage();
  }

  _renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♂️'}${workout.description}`
      )
      .openPopup();
  }
  _renderWorkout(workout) {
    let html = `
    <li class='workout workout-${workout.type}' data-id="${workout.id}">
      <h2 class='workout-title'>${workout.description} </h2>
      <div class='workout-details'>
        <span class='workout-icon'>${
          workout.type === 'running' ? '🏃‍♂️' : '🚴‍♂️'
        }</span>
        <span class='workout-value'>${workout.distance}</span>
        <span class='workout-unit'>km</span>
      </div>
      <div class='workout-details'>
        <span class='workout-icon'>⏱</span>
        <span class='workout-value'>${workout.duration}</span>
        <span class='workout-unit'>min</span>
      </div>
    `;
    if (workout.type === 'running')
      html += `
        <div class='workout-details'>
          <span class='workout-icon'>⚡️</span>
          <span class='workout-value'>${workout.pace.toFixed(1)}</span>
          <span class='workout-unit'>min/km</span>
        </div>
        <div class="workout-details>
            <span class="workout-icon>🦶</span>
            <span class='workout-value>${workout.cadence}</span>
            <span class="workout-unit>spm</span>
        </div>
       
        `;
    if (workout.type === 'cycling')
      html += `
        <div class="workout-detail">
            <span class="workout-icon">⚡️</span>
            <span class="workout-value">${workout.speed.toFixed(1)}</span>
            <span class="workout-unit"></span>
        </div>
        <div class="workout-detail">
            <span class="workout-icon">📸</span>
            <span class="workout-value">${workout.elevation}</span>
            <span class="workout-unit">m</span>
        </div>
        </li>
        `;

    form.insertAdjacentHTML('afterend', html);

    //moving to the map locations
  }
  _moveToPopup(e) {
    const workoutEl = e.target.closest('.workout');
    // console.log(workoutEl);

    if (!workoutEl) return;

    const workout = this.#WorkOut.find(
      (work) => work.id === workoutEl.dataset.id
    );
    console.log(workout);
    this.#map.setView(workout.coords, this.#mapZoomLevel, {
      animate: true,
      pan: {
        duration: 1,
      },
    });

    // just for fun using the public interface
    // workout.click();
  }

  _setLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.#WorkOut));
  }

  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('workouts'));
    console.log(data);

    //check if there is some data in the storage
    if (!data) return;
    // else if there is data
    this.#WorkOut = data;
    //render them in the list
    this.#WorkOut.forEach((wor) => {
      //load it on the side
      this._renderWorkout(wor);
    });
  }
  reset() {
    localStorage.removeItem('workouts');
    location.reload();
  }
}
// -------------------------------------------------------------------------------------------------------------

const app = new App();

// -----------------------

// _moveToPopup(e);
// {
//   const workoutEl = e.target.closest('.workout');
//   console.log(workoutEl);
//   if (!workoutEl) return;

//   const workout = this.#WorkOut(function (work) {
//     work.id === workoutEl.dataset.id;
//     console.log(workout);
//   });
// }
// class App {
//     #map;
//     #mapEvent;
//     constructor() {
//       this._loadMap;
//     }

//     _getPosition() {
//       if (navigator.geolocation)
//         navigator.geolocation.getCurrentPosition(
//           this._loadMap.bind(this),
//           function () {
//             alert(`Can not access the location!`);
//           }
//         );
//     }

//     _loadMap(position) {
//       const latitude = position.coords.latitude;
//       const longitude = position.coords.longitude;
//       const coord = [latitude, longitude];

//       this.#map = L.map('map').setView(coord, 13);

//       L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         attribution:
//           '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//       }).addTo(this.#map);

//       //   handling clicks on map
//       this.#map.on('click', this._showForm.bind(this));
//     }

//     _showForm(mapE) {
//       this.#mapEvent = mapE;
//       form.classList.remove('hidden');
//       inputDistance.focus();
//     }

//     _toggleElevationField() {
//       formInputType.addEventListener('change', function () {
//         inputDuration.closest('.form-row').classList.toggle('form-row-hidden');
//         inputCadence.closest('.form-row').classList.toggle('form-row-hidden');
//       });
//     }

//     _newWorkOut() {
//       form.addEventListener('submit', function (e) {
//         e.preventDefault();
//         const { lat, lng } = this.#mapEvent.latlng;

//         //clear input fields
//         inputDistance.value = inputCadence.value = inputDuration.value = '';

//         //dislaying a marker and marker information on a map
//         L.marker([lat, lng])
//           .addTo(this.#map)
//           .bindPopup(
//             L.popup({
//               maxWidth: 250,
//               minWidth: 100,
//               autoClose: false,
//               closeOnClick: false,
//               className: 'running-popup',
//             })
//           )
//           .setPopupContent('workout')
//           .openPopup();
//       });
//     }
//   }

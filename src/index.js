import { render } from "@testing-library/react";
import react from "react";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";


class FilmItem extends React.Component {
  render() {
    const film = this.props.film;
    const title = film.title;
    const filmID = film.filmID;
    const length = film.length;
    const languageID = film.languageID;
    const description = film.description;
    return (
      <tr>
        <td>{title}</td>
        <td>{filmID}</td>
        <td>{length}</td>
        <td>{languageID}</td>
        <td>{description}</td>
      </tr>
    );
  }
}

// class ActorItem extends React.Component{
//     render(){
//         const actor = this.props.actor
//         const actorID = actor.actorID
//         const firstname = actor.firstname
//         const lastname = actor.lastname
//         const lastupdate = actor.lastupdate
//         return(
//             <tr>
//                 <td>{actorID}</td>
//                 <td>{firstname}</td>
//                 <td>{lastname}</td>
//                 <td>{lastupdate}</td>
//             </tr>
//         );
//     }
// }

class FilmList extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Film ID</th>
            <th>Length</th>
            <th>Language ID</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>{this.props.rows}</tbody>
      </table>
    );
  }
}

// class ActorList extends React.Component{
//     render(){
//         const filterText = this.props.filterText;
//     //    const filterText = ""
//         const rows = []
//         this.props.actors.forEach((actor) => {
//             if (actor.firstname.toLowerCase().indexOf(filterText.toLowerCase()) === -1 ){
//                 return;
//             }
//             rows.push(
//                 <ActorItem
//                 actor={actor}
//                 key={actor.firstname}
//                 />
//             )
//         }
//         )
//         return(
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Actor ID</th>
//                         <th>First Name</th>
//                         <th>Last Name</th>
//                         <th>Last Update</th>
//                     </tr>
//                 </thead>
//                 <tbody>{rows}</tbody>
//             </table>
//         )
//     }
// }

//   //class addFilm extends React.Component{

// }

// class DeleteFilm extends React.Component{
// }

class FilmEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      AddTitle: "",
      AddFilmID: "",
      AddDescription: "",
      AddLength: "",
      AddLanguageID: ""
    };

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeFilmID = this.handleChangeFilmID.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangeLength = this.handleChangeLength.bind(this);
    this.handleChangeLanguageID = this.handleChangeLanguageID.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChangeTitle(event) {
    this.setState({ AddTitle: event.target.value });
  }
  handleChangeFilmID(event) {
    this.setState({ AddFilmID: event.target.value });
  }
  handleChangeDescription(event) {
    this.setState({ AddDescription: event.target.value });
  }
  handleChangeLength(event) {
    this.setState({ AddLength: event.target.value });
  }
  handleChangeLanguageID(event) {
    this.setState({ AddLanguageID: event.target.value });
  }

  handleSubmit(event) {
    alert("A Film was successfully added: " + this.state.AddTitle);
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
        Title:
          <input
            type="text"
            placeholder="Enter Film Title"
            value={this.state.AddTitle}
            onChange={this.handleChangeTitle}
          />
        ID:
          <input
            type="text"
            placeholder="Enter Film ID"
            value={this.state.AddFilmID}
            onChange={this.handleChangeFilmID}
          />
        Description:
          <input
            type="text"
            placeholder="Enter Film Description"
            value={this.state.AddDescription}
            onChange={this.handleChangeDescription}
          />
        Length:
          <input
            type="text"
            placeholder="Enter Film Length"
            value={this.state.AddLength}
            onChange={this.handleChangeLength}
          />
        Language ID:
          <input
            type="text"
            placeholder="Enter Film Language ID"
            value={this.state.AddLanguageID}
            onChange={this.handleChangeLanguageID}
          />
        </label>
        <input type="submit" value="Add Film" />
      </form>
    );
  }
}

// class ActorEntry extends react.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//         AddTitle: '',
//         AddID: '',
//         AddDescription: '',
//         AddLength: ''
//         };

//         this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
//         this.handleChangeLastName = this.handleChangeLastName.bind(this);
//         this.handleChangeLastUpdate = this.handleChangeLastUpdate.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//         }

//         handleChangeFirstName(event) {
//         this.setState({value: event.target.value});
//         }
//         handleChangeLastName(event) {
//         this.setState({value: event.target.value});
//         }
//         handleChangeLastUpdate(event) {
//         this.setState({value: event.target.value});
//         }

//         handleSubmit(event) {
//         alert('An Actor was successfully submitted: ' + this.state.firstname);
//         event.preventDefault();
//         }
//         render(){
//         return(
//         <form onSubmit={this.handleSubmit}>
//         <label>
//         Actor First Name:
//         <input type="text" placeholder="Enter Actor First Name" AddFirstName={this.state.AddFrstName} onChangeFirstName={this.handleChangeFirstName} />
//         Actor Last Name:
//         <input type="text" placeholder="Enter Actor Last Name" AddLastName={this.state.AddLastName} onChangeLastName={this.handleChangeLastName} />
//         Actor Last Update:
//         <input type="text" placeholder="Enter Actor Last Update" AddLastUpdate={this.state.AddLastUpdate} onChangeLastupdate={this.handleChangeLastUpdate} />
//         </label>
//         <input type="submit" value="Submit" />
//         </form>
//         )
//         }
//     }

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFiltertextChange = this.handleFiltertextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFiltertextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  handleSubmit(event) {
    alert("Search Result: " + this.props.filterText);
  }

  render() {
    const filterText = this.props.filterText;
    return (
      <form
        onSubmit={(e) => {
          this.props.handleClick(e);
        }}
      >
        <input
          type="text"
          placeholder="Search Film"
          value={this.props.filterText}
          onChange={this.handleFiltertextChange}
        />
        <input type="submit" value="Search"></input>
      </form>
    );
  }
}


class FilmDatabase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      rows: this.renderAllRows(),
    };
    this.handleFiltertextChange = this.handleFiltertextChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleFiltertextChange(filterText) {
    this.setState({
      filterText: filterText,
    });
  }

  renderAllRows() {
    const rows = [];
    const films = this.props.films;
    films.forEach((film) => {
      rows.push(<FilmItem film={film} key={film.title} />);
    });
    return rows;
  }

  handleClick(event) {
    alert("Search Result: " + this.state.filterText);
    event.preventDefault();
    const filterText = this.state.filterText;

    const rows = [];
    const films = this.props.films;
    films.forEach((film) => {
      if (film.title.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
        return;
      }
      rows.push(<FilmItem film={film} key={film.title} />);
    });
    this.setState({
      rows: rows,
    });
  }

  render() {
    return (
      <div>
        <div>
          <h1>Film Database</h1>
          <div>
            <br />
            <div>
              <SearchBar
                filterText={this.state.filterText}
                onFilterTextChange={this.handleFiltertextChange}
                onFilterTextSubmit={this.handleSubmit}
                handleClick={this.handleClick}
              />
            </div>
            <br />
            <FilmList
              films={this.props.films}
              filterText={this.state.filterText}
              rows={this.state.rows}
            />
          </div>
          <br />
          <div>
            <FilmEntry />
          </div>
          <br />
          {/* <div>
                    <div>
                    <ActorList
                    actors={this.props.actors}
                    filterText={this.state.filterText}/>
                    </div>
                    <br />
                    <ActorEntry />
                    </div>
                    <br /> */}
        </div>
      </div>
    );
  }
}

class Package extends React.Component {
  render() {
    const reactPackage = this.props.reactPackage;

    return (
      <tr>
        <td>{FilmItem.title}</td>
        <td>{FilmItem.filmID}</td>
        <td>{FilmItem.length}</td>
        <td>{FilmItem.description}</td>
        <td>{FilmItem.languageID}</td>
      </tr>
    );
  }
}

class ReactPackages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      top10Packages: [],
      totalPackages: null,
    };
  }

  componentDidMount() {
    fetch("3.92.83.234:8080/films")
      .then((response) => response.json())
      .then((jsonData) => {
        const packages = jsonData.results.slice(0, 10);
        this.setState({
          top10Packages: packages,
          totalPackages: jsonData.total,
        });
      });
  }

  render() {
    const rows = [];
    this.state.top10Packages.forEach((reactPackage) => {
      rows.push(<Package reactPackage={reactPackage} />);
    });

    return (
      <div>
        <h1>TOP 10 FILM RESULTS</h1>
        <thead style={({ color: "blue" }, { textAlign: "" })}>
          <tr>
            <td>
              <b>Title</b>
            </td>
            <td>
              <b>Film ID</b>
            </td>
            
            <td>
              <b>Length</b>
            </td>
           
            <td>
              <b>Description</b>
            </td>
            
            <td>
              <b>language ID</b>
            </td>
          </tr>
        </thead>
        <tbody>{rows}</tbody>

        <h4>{this.state.totalPackages}</h4>
      </div>
    );
  }
}
class App extends React.Component {
  render() {
    return (
      <div>
        <ReactPackages />
      </div>
    );
  }
}


const FILMS = [
  // {
  //   title: "Batman",
  //   filmID: 1,
  //   length: "89 mins",
  //   languageID: 1,
  //   description: "Batman film",
  // },
  // {
  //   title: "Superman",
  //   filmID: 7,
  //   length: "126 mins",
  //   languageID: 1,
  //   description: "Superman film",
  // },
  // {
  //   title: "Spiderman",
  //   filmID: 9,
  //   length: "134 mins",
  //   languageID: 1,
  //   description: "Spiderman film",
  // },
];

// const ACTORITEM = [
//   { actorID: 201, firstname: "Gabriel", lastname: "Matos", lastupdate: 2021 },
//   { actorID: 202, firstname: "Kapo", lastname: "Tsang", lastupdate: 2021 },
//   { actorID: 203, firstname: "Louis", lastname: "Clark", lastupdate: 2021 },
// ];

// ReactDOM.render(
//   <FilmDatabase films={FILMS} rows={[]} />,
//   document.getElementById("root")
// );

ReactDOM.render(<ReactPackages />, document.getElementById("root"));

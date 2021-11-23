import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class FilmItem extends React.Component {
  render() {
    const film = this.props.film;
    // const title = film.title;
    // const filmID = film.filmID;
    // const length = film.length;
    // const languageID = film.languageID;
    // const description = film.description;
    return (
      <tr>
        <td>{film.title}</td>
        <td>{film.film_id}</td>
        <td>{film.length}</td>
        <td>{film.language_id}</td>
        <td>{film.description}</td>
      </tr>
    );
  }
}

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

class FilmEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      AddTitle: "",
      AddFilmID: "",
      AddDescription: "",
      AddLength: "",
      AddLanguageID: "",
    };

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeFilmID = this.handleChangeFilmID.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangeLength = this.handleChangeLength.bind(this);
    this.handleChangeLanguageID = this.handleChangeLanguageID.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  functionName() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        film_id: 1003,
        language_id: 1,
        title: "title",
        length: "length",
        description: "description",
      }),
    };
    fetch("3.92.83.234:8080/addFilm", requestOptions).then((response) =>
      response.json()
    );
    // .then(data => this.setState({ postTitle: data.film_id }));
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
    this.functionName();
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

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFiltertextChange = this.handleFiltertextChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFiltertextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  // handleSubmit(event) {
  //   alert("Search Result: " + this.props.filterText);
  // }

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


// class ReactPackages extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       movies: [],
//       totalPackages: null,
//     };
//   }



  // render() {
  //   const rows = [];
  //   this.state.movies.forEach((reactPackage) => {
  //     rows.push(<GetFilms reactPackage={reactPackage} />);
  //   });

  //   return (
  //     <div>
  //       <h1>FILM RESULTS</h1>
  //       <thead style={({ color: "blue" }, { textAlign: "" })}>
  //         <tr>
  //           <td>
  //             <b>Title</b>
  //           </td>
  //           <td>
  //             <b>Film ID</b>
  //           </td>
  //           <td>
  //             <b>Length</b>
  //           </td>
  //           <td>
  //             <b>Description</b>
  //           </td>
  //           <td>
  //             <b>Language ID</b>
  //           </td>
  //         </tr>
  //       </thead>
  //       <tbody>{rows}</tbody>

  //       <h4>{this.state.totalPackages}</h4>
  //     </div>
  //   );
  // }


class AddFilm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      postTitle: null,
    };
  }

  // componentDidMount()
  render() {
    const { postfilm } = this.state;
    return (
      <div className="card text-center m-3">
        <h5 className="card-header"></h5>
        <div className="card-body"></div>
      </div>
    );
  }
}

// class GetFilms extends React.Component {
//   render() {
//     const reactPackage = this.props.reactPackage;

//     return (
//       <tr>
//         <td>{reactPackage.title}</td>
//         <td>{reactPackage.film_id}</td>
//         <td>{reactPackage.length}</td>
//         <td>{reactPackage.description}</td>
//         <td>{reactPackage.language_id}</td>
//       </tr>
//     );
//   }
// }

class FilmDatabase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      movies: [],
      rows: [],
    };
    this.handleFiltertextChange = this.handleFiltertextChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch("http://3.92.83.234:8080/films")
      .then((response) => response.json())
      .then((jsonData) => {
        const filminfo = jsonData.slice(0, 100);
        this.setState({
          movies: filminfo,
          rows: filminfo,
        });
      });
  }

  handleFiltertextChange(filterText) {
    this.setState({
      filterText: filterText,
    });
  }

  handleClick(event) {
    alert("Search Result: " + this.state.filterText);
    event.preventDefault();
    const filterText = this.state.filterText;

    const rows = [];
    const movies = this.state.movies;

    movies.forEach((film) => {
      if (film.title.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
        return;
      }
      rows.push(film);
    });
    this.setState({
      rows: rows,
    });
  }
  render() {
    const renderRows = [];
    this.state.rows.forEach((film) => {
      renderRows.push(<FilmItem film={film} key={film.title} />)
    })
    return (
      <div>
        <div>
          <h1>Film Database</h1>
          <div />
          <div>
            <SearchBar
                filterText={this.state.filterText}
                onFilterTextChange={this.handleFiltertextChange}
                onFilterTextSubmit={this.handleSubmit}
                handleClick={this.handleClick}
              />
          </div>
          <br />
          <div>
            <FilmEntry />
          </div>
          <div>
            <h2>Film Results</h2>
          </div>
          <div>
            <FilmList 
              movies={this.state.movies}
              filterText={this.state.filterText}
              rows={renderRows} 
            />
          </div>
        </div>
        {/* <GetFilms
        movies={this.state.movies}
        rows={renderRows} /> */}
        <AddFilm />
      </div>
    );
  }
}



ReactDOM.render(<FilmDatabase />, document.getElementById("root"));

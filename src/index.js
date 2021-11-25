import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class FilmItem extends React.Component {
  render() {
    const film = this.props.film;
    return (
      <tr>
      <td>{film.film_id}</td>
      <td>{film.language_id}</td>
      <td>{film.title}</td>
      <td>{film.length}</td>
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
          <th>Film ID</th>
          <th>Language ID</th>
          <th>Title</th>
          <th>Length</th>
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

  handleChangeFilmID(event) {
    this.setState({ AddFilmID: event.target.value });
  }
  handleChangeLanguageID(event) {
    this.setState({ AddLanguageID: event.target.value });
  }
  handleChangeTitle(event) {
    this.setState({ AddTitle: event.target.value });
  }
  handleChangeDescription(event) {
    this.setState({ AddDescription: event.target.value });
  }
  handleChangeLength(event) {
    this.setState({ AddLength: event.target.value });
  }
  
  handleSubmit(event) {
    alert("A Film was successfully added: " + this.state.AddTitle);
   
      const film_id = this.state.AddFilmID;
      const language_id = this.state.AddLanguageID;
      const title = this.state.AddTitle;
      const length = this.state.AddLength;
      const description = this.state.AddDescription;
      const requestOptions = {
        method: "POST",
        headers: { "Accept": "application/json",
          "Content-Type": "application/json" },
        body: JSON.stringify({
          film_id: film_id,
          language_id: language_id,
          title: title,
          length: length,
          description: description,
        })
      };

      fetch("http://localhost:8080/films/addfilmbody", requestOptions).then((response) =>
        response.json()
      //   .then(data => this.setState({ AddTitle: data.title,
      //     AddLength: data.length,
      //     AddFilmID: data.film_id,
      //     AddDescription: data.description,
      //     // AddLanguageID: data.language_id,
      //   })
      // )
      )
  
      // .then(data => this.setState({ postTitle: data.film_id }));
    }
  

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
        ID:
          <input
            type="text"
            placeholder="Enter Film ID"
            value={this.state.AddFilmID}
            onChange={this.handleChangeFilmID}
          />
          Language ID:
          <input
            type="text"
            placeholder="Enter Film Language ID"
            value={this.state.AddLanguageID}
            onChange={this.handleChangeLanguageID}
          />
          Title:
          <input
            type="text"
            placeholder="Enter Film Title"
            value={this.state.AddTitle}
            onChange={this.handleChangeTitle}
          />
          Length:
          <input
            type="text"
            placeholder="Enter Film Length"
            value={this.state.AddLength}
            onChange={this.handleChangeLength}
          />
          Description:
          <input
            type="text"
            placeholder="Enter Film Description"
            value={this.state.AddDescription}
            onChange={this.handleChangeDescription}
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

  render() {
    // const filterText = this.props.filterText;
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
      movies: [],
      rows: [],
    };
    this.handleFiltertextChange = this.handleFiltertextChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:8080/films")
      .then((response) => response.json())
      .then((jsonData) => {
        const filminfo = jsonData;
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
        {/* <AddFilm /> */}
      </div>
    );
  }
}


ReactDOM.render(<FilmDatabase />, document.getElementById("root"));
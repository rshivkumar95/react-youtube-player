import React, { Component } from "react";
import ReactDOM from "react-dom";
import config from "./config/config";
import YTSearch from "youtube-api-search";
import SearchBar from "./modules/search_bar/search_bar";
import VideoList from "./modules/video_list/video_list";
import VideoDetail from "./modules/video_detail/video_detail";
import _ from "lodash";
import style from "./css/style.css";

class App extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        videos: [],
        selectedVideo: null
      };
  
      this.videoSearch("edutechus");
    }
  
    videoSearch(term) {
      YTSearch({ key: config.APIKey, term: term }, videos => {
        this.setState({
          videos: videos,
          selectedVideo: videos[0]
        });
      });
    }
  
    render() {
      const videoSearch = _.debounce(term => {
        this.videoSearch(term);
      }, 300);
  
      return (
        <div className={style.app}>
            <div className="container">
                <div className="row">
                    <div className={style.brand}>
                        <h3>YouTube Player Using React.js</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <SearchBar onSearchTermChange={videoSearch} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-8">
                        <VideoDetail video={this.state.selectedVideo} />
                    </div>
                    <div className="col-sm-4">
                        <VideoList
                        onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                        videos={this.state.videos}
                        />
                    </div>
                </div>
            </div>
        </div>  
      );
    }
  }
  
ReactDOM.render(<App />, document.querySelector(".appwrapper"));

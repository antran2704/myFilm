import { AiOutlineClose } from "react-icons/ai";
import "./Modal.scss";

function Modal({ show, onClick, data, url }) {
  const movie = data[0];
  return (
    <div className={`modal_container ${show ? "show-bg" : "hide-bg"}`}>
      <div className="modal_out" onClick={onClick}></div>
      <div
        className={`modal_wrap ${show ? "show-modal" : "hide-modal"}`}
        style={movie && { backgroundImage: `url(${movie.poster_url})` }}
      >
        <div className="modal">
          <div className="modal_content">
            <AiOutlineClose onClick={onClick} className="modal_close" />
            <h3 className="modal_tilte">{movie && movie.name}</h3>
            <div className="modal_number">
              <span className="modal_rating">
                Thể loại: {movie && movie.type}
              </span>
              {movie && movie.type === "series" && (
                <>
                  <p className="modal_total">{movie.episode_current}</p>
                  <p className="modal_time">{movie.time}</p>
                </>
              )}
            </div>
            <a
              className="modal_link"
              href={url[0] && url[0].server_data[0].link_embed}
            >
              <button className="modal_btn-play">Play film</button>
            </a>
            <p className="modal_desc">{movie && movie.content.replace("<p>","")}</p>
          </div>
          {movie &&
            url.length > 0 &&
            url.map(function (data, index) {
              return (
                <div key={index} className="modal_series-wrap">
                  <p className="modal_name-film">{data.server_name}</p>
                  <div className="modal_series-film">
                    {data.server_data &&
                      data.server_data.map(function (data, index) {
                        return (
                          <a
                            key={index}
                            href={data.link_embed}
                            className="modal_series-link"
                          >
                            <p className="modal_series-number">{data.name}</p>
                          </a>
                        );
                      })}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Modal;

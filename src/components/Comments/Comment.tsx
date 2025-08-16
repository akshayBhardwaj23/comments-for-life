import type { Post } from "../../data";

interface CommentProps extends Post {
  onUnauthenticatedAction?: () => void;
}

const Comment = ({
  author,
  content,
  timestamp,
  reactions,
  onUnauthenticatedAction,
}: CommentProps) => {
  const handleClick = () => {
    onUnauthenticatedAction?.();
  };
  return (
    <div className="bg-[#00000008] rounded-xl p-2 m-4 w-[554px] hover:translate-y-[-3px] transition-all duration-300">
      <div className=" bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="p-2 flex gap-2 ">
          <img
            className="w-14 h-14"
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQApQMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAwQBBQYHAgj/xAA7EAABAwIDBgMFBwIHAQAAAAABAAIDBBEFEiEGEzFBUWEiMpEHUnGBoRQjQnKx0eEW8FNikrLBwvEV/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECBAMFBv/EACYRAAIDAAIBAwQDAQAAAAAAAAABAgMREiExBCJBBTJRYTNCkSP/2gAMAwEAAhEDEQA/APcUREAEREAERRSS5dG6lAEl18OmaOBueirucXeYrCeE6TGc8gF871/b0Wg2j2nw3Z4MbVvMlVLcx00er3Dr2HcrlcO9qVM6nr6nEqUsbG8CljhBJkFtbuOl7qXKKLjXOXaR6RvX9fosiZw42XB4L7SMOrIqSnrY5IsTneGup42EtjBdYEvOlrEE8+y7jnZNNPwS4uPknbP1CkbI13AqoieC0uXWVVZK5unEd1Ox4cNPRIen2iIgYREQAREQAREQAWOCyq8slzZvDmgTYkkJ0bw6qJETwkirKmGjpZqqqkbHBCwvke7g1oGpXmGMe1CqfFWQ4ZQxwvEgZDPIbkA2scvva3V/2vYk80EWEwk/eN38tuYB8LfmQT8gvLqghzJHs18cc3ysB/wuM5vcRrppTjsiarnmqJKipllfLUTyCLevN3HkTf1XxNkbMyEDwQRmQjqRwWOEVxqIZs5/Kdb/AF+iTACvcHeWeLID3t/C5GpETo8uGSyP8Uk48RPQldThu2OPYZWRU8dc6WnZFpHUDecO51+q0LG/aaAxHwuDch7EKF8xfFFUgHeQG0jeduaaf4E4qXk9v2N2uh2kjmikiEFbAfHEDcObp4mnprw5Lpbi6/PGH1lTh+LRVmHVDoXvic3Mw8Rp/HovTdhtsJ8QqhhuKua6ZwJgmAsXEC5ae9rkFdoWb0zHbRncfB3SyCQbhYRdTOWI5M3HQqVUxodCp4ZM47hSNMlREQUEREAERYKAI5n5fCOJVdZe7M6/osJ4SwiJwTEeRe0l5/qt7XcNzHb0J/dcjT4bVVeJU1NQAPdK4gtdwDfxX/y/3zXde1uja3EaOoN27+IsDhyc06f7gvn2YU29jqsRkaDJfcNI4WGpt9PRY7OmejW/+aOdrNiccw6UPpo4qqG1nMD7OA6a2/VUp8BrzFu3UdQG3uw5CTGf2Xta+DGwm5Y0/ELlzZXI8NbheNsqA6PDahzjo8tZ4X9+xW4g2OxmvtK2lNJIdCZXNsR0IF7r1sNaODQD2FllHJhyPJsT2UqNnMMjqqioZMDKGODW2EQdw+tgotnpCzH8PMfnbURnTl4l6TtVRiv2cxCmIvmgcR2IFx+i819nsf2jHsKadS6oznW98oJN/wDSrrbbBv2s935oiLcjzAstJabhYRGAW2uzC4X0oKd2paVOpKQREQMKOd1mEdVIoKg6gIEyFERUiQiIgDjfapQ/atnGz5cxp5QT+V2h+tlzWyOIz4ZsdAMPw+or6+aaXdwtFtQ8i73cAOC9Fxl4DGNexroXmzmuFwQtPgNIMPpZqNmjYqh+T8rvEP1+ixXNORtp/jOXye0mcb3eYNTE8IL6j52cPqtvstU7VOqZqbaagp2RCPNFVU722cbgZSA7ve9hwVXbLEsWwqvpqfD2SzumyuEgA3dvFmAtrfRoA531XWNilhY1sxu4tB7i41B7gqXudorVpTxqeupsLnlwqjFXWgDdQucGgkm2pJGg48eS5FkftKlGcy4PAfcdy9A79V3JJ3gAGtjZcntViOMYTjsFPFFNNTTR6OgGrpCDYAe7cAHn6pR34Q3nyfWE4ptHFUHD9qsKY2OYZI66k8UdyODhc2+Onw5rQey2kd/UdKH+aCKR57eHL/2Xpm7dAQ18mc2vfmOx5LT7LUow6hooo2Bss43spA1udf4TjLH4E+4s69FlYW889eAiIgZkHK4HuripK1EbsCTGj7RESKMBV5vP8lYVebz/ACTQmRoiJkhERAFTFIBNSkH8LgVQByWA9VuXDM0tIuDoVp62MxPt04FZL4d8jVRLriZ4cNEWGm7QsSB9xkc1umtxdZ9O/RiQ2kjI6lqkUDo5XluZ7RlN/CFMjQZ8uNtON+SloYAa0S20a3gq/mmAW3pody03N3FdKocpac7ZcY4TIiLeYgiIgArEHkVdWIPJ80mNeSVERIoKtOPED2VlQ1A0BQJkCIiokIiIAKtXQb1mYC5HLqFZRTKKksHGXF6aXKcmW5B6hVJY6sO8EpcFssSkjhqGCwGcEk9FECLXve/RefKOPD0Iy1aa8R1pOsjm+iuQxuY3xvL3HqpVXmqmRuDRYm+qlLBtl6jgLpBIR4W/VbFYaAAMvC2iyvQrgorDz7Jc3oREXQkIiIAXVmEfdhVrXPdXGjK0DoEmNGUREigvmRuZhC+lgoApopJ2WdccCo1RAWVhUK3F6OlBaZN5J7ketvieCiy2Fa2TwF2X18ve1nmcG34XK5ar2gqpbinAgb14u9eS1m/lMoldI9zwb5nOJK8y36tVF5BaWofk6qsLKiQ3ALQLBUTSOYfupS0fFSUtSypizsOv4m9FMnzVnuXybY9LEVPssjvPOSOmqT0rGwktvmHHuracONkYitLeH1sU8EbXSNEoFiCbXPZXl51iFQJZssZ+7aT8yvqjxevpLCOoeWe485h9Ul9SjGXGSMNkVy9p6Ei5ij2rabCtp7H34jcehW+pMQpK0Xpp2PPu3s4fIrdV6qq37Wc8LKJfVFoA+4m5n/BWlHC3K3uVIpKQREQMLBWUQB8vaHNsVTnc2BjnynK1ouT2V5UcXojXUMkDH5HOtY/A3spnJxi3HyLNOPxDGKmsc5rXGOG+jGm1x3WuUlTBLTTPhnZkkbxH98VGvkLZ2Tk3Z5OoREXMD6ilfC/PE4td1C21DiTp5hFM1oJGjh1WnWWuLXBw0INwV2pulW1j6KjJpnS1MwggdIRfKOHUrSVOITztyGzGHk3mrWKVO9o4bcZDmI6W/wDVqlo9Ze3LjF9FTkyN0LDwFvgonQuHCzlZRYlJnJopcOdijSWuDmEtcOBGllZfGH/FVnDKSDyXSMtE+jqtmcZknlFHWPL32vHI46nseq6mFlzcrhdm8JqK6rjqGkxQwvDjJbiRyC9CaAAABYL6P0E7JVe8jAsoi2jCIiACIiACwRdZRAFDFMMp8Riyyizx5XjiFxmJYXU4e471uaO+kjeB/Zegr5exj2lr2hzSLEEXusPqvQ139+GNM8zRdfiGzME130jtw/3bXaf2Whq8ExClJzU5kb70fiXh3eiuq8rV+itNciOBa6zgWnoRZFkzBmXOLg0H8IssIiG98g3oRSQwTTuAghfITya0lbej2arJ9agtp2d/EfT+V1rott+yIGkAJIAGpNgFvML2XfUvbPX3ji47rg53x6LosOwekoLOjjzy/wCI/U/wthbsvY9N9MUXyt7/AES2fEMMcEbY4WNYxos1rRYBSIi9dJJYiQiImAREQAREQAREQAREQAREQBDLBDMPvYmP/M0FVJMHw15uaOK56C36IiiVUJeUhnz/APDwwa/ZGep/dTR4XQRkZKOAHrkBRFKoqX9V/gFtjWtFmtAHYL6RF1zBBERABERABERABERAH//Z"
            alt="Avatar"
          />
          <div className="flex flex-col">
            <p className="text-sm">{author.name}</p>
            <span className="text-xs">{timestamp.toLocaleString()}</span>
          </div>
        </div>
        <div className="p-2 flex gap-2">
          <p className="m-5">🙂</p>

          <p className="pb-4 text-sm text-gray-700">{content}</p>
        </div>
      </div>
      <div className="flex justify-start gap-2 p-5">
        <button
          onClick={handleClick}
          className="flex items-center gap-2 text-sm "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4 hover:scale-125 transition-all duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
          {reactions.likes}
        </button>
        <button
          onClick={handleClick}
          className="flex items-center gap-2 text-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4 hover:scale-125 transition-all duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          {reactions.comments}
        </button>
        <button
          onClick={handleClick}
          className="flex items-center gap-2 text-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4 hover:scale-125 transition-all duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
            />
          </svg>
          {reactions.shares}
        </button>
      </div>
    </div>
  );
};

export default Comment;

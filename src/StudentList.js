import React, { useState, useEffect } from "react";

function StudentList() {
  const [data, setData] = useState([]);

  const apiGet = () => {
    fetch("https://api.hatchways.io/assessment/students").then((response) =>
      response.json().then((json) => {
        // console.log(json);
        setData(json.students);
      })
    );
  };
  useEffect(() => {
    return () => {
      apiGet();
    };
  });
  console.log(data);

  return (
    <div>
      {apiGet()}
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      {console.log(data)}
      {data.map((item) => (
        // console.log(student.id);
        // <li>
        //   <h2>{item.company}</h2> <img src={item.pic} /> <h2>{item.city}</h2>
        // </li>
        // <div>{item.name}</div>
        <section class="main">
          <div class="imge">
            <div class="ring">
              <img class="images" src={item.pic} alt="" />
            </div>
            <div class="contents">
              <h1 class="name">
                {item.firstName}
                {item.lastName}
              </h1>
              <h3 class="details">
                Email:{item.email}
                <br />
                Company:{item.company}
                <br />
                Skill:{item.skill}
                <br />
                {/* Average:88.875% */}
              </h3>
            </div>
            <button>+</button>
          </div>
        </section>
      ))}
    </div>
  );
}

export default StudentList;

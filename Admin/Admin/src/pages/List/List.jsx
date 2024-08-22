import React, { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";

function List() {
  const url = "http://localhost:4000";
  const [list, setList] = useState([]);

  useEffect(() => {
    fetchList();
  }, []);

  const fetchList = async () => {
    const responce = await axios.get(`${url}/api/food/list`);
    if (responce.data.success) {
      console.log(responce.data);
      setList(responce.data.data);
    } else {
      toast.error("error");
    }
  };
  const removeFood = async (id) => {
    const response = await axios.post(`${url}/api/food/remove`, { id: id });
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };
  return (
    <>
      <div className="list add flex-col">
        <p>All Food List</p>
        <div className="list-table">
          <div className="list-table-format title">
            <b>Image</b>
            <b>Name</b>
            <b>Category</b>
            <b>Price</b>
            <b>Action</b>
          </div>
          {list.map((item, index) => {
            return (
              <div key={index} className="list-table-format">
                <img src={`${url}/images/` + item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p>${item.price}</p>
                <p onClick={() => removeFood(item._id)} className="curser">
                  x
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default List;

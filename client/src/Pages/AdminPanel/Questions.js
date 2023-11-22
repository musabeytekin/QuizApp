import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./adminpanel.css";
import AdminMenu from "../../Components/AdminMenu/AdminMenu";
import axios, { Axios } from "axios";
import { MdDelete } from "react-icons/md";
import { TiEdit } from "react-icons/ti";
const Questions = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("http://localhost:5001/api/question").then((res) => {
      setQuestions(res.data.data);
      setLoading(false);
      console.log(res.data.data);
    });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5001/api/question/${id}`)
      .then((res) => {
        setQuestions((prevQuestions) =>
          prevQuestions.filter((question) => question._id !== id)
        );
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  const handleEdit = (question) => {
    navigate("/admin/edit", { state: { question } });
  };
  return (
    <div className="questions">
      <h2 className="header">SORU LİSTESİ</h2>
      <table className="table table-light table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>İÇERİK</th>
            <th>İŞLEMLER</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <div>Veri Yükleniyor</div>
          ) : (
            questions.map((question) => (
              <tr key={question._id}>
                <td>{`${question._id.substr(0, 8)}...`}</td>
                <td>{`${question.question.substr(0, 25)}...`}</td>
                <td>
                  <div className="op-buttons">
                    <button
                      className="btn btn-link"
                      onClick={() => handleEdit(question)}
                    >
                      <TiEdit />
                    </button>
                    <button
                      className="btn btn-link"
                      onClick={() => handleDelete(question._id)}
                    >
                      <MdDelete />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Questions;

import React, { useState } from 'react'
import TitleCom from '../../../components/common/TitleCom'
import IEmp from '../../../types/IEmp';
import EmpService from '../../../services/EmpService';

function AddEmpNop() {
  const initailEmp = {
    eno : null,
    ename : "",
    job : "",
    manager : "",
    hiredate : "",
    salary : "",
    commission : "",
    dno : ""
  }

  const [emp,setEmp] = useState<IEmp>(initailEmp);
  const [submitted,setSubmitted] = useState<boolean>(false);
  
  const newEmp = () => { 
    setEmp(initailEmp);
    setSubmitted(false);
 }

  const handleInputChange = (event:any) => { 
    const {name , value} = event.target;
    setEmp({...emp,[name]:value});
  }

  const saveEmp = () => {
    var data = {
        ename : emp.ename,
        job : emp.job,
        manager : emp.manager,
        hiredate : emp.hiredate,
        salary : emp.salary,
        commission : emp.commission,
        dno : emp.dno
    }
    // 저장 함수 호출
    EmpService.create(data) // 백엔드로 저장 요청
    .then((response:any)=>{
        // 객체 저장
        setEmp(response.data);
        // 저장 성공 유무 -> submmited 변수
        setSubmitted(true); // 화면 변경
        console.log(response.data);
    })
    .catch((e:Error)=>{
        console.log(e);
    })
  }
    return (
        <div className="row">
        {submitted ? (
          <div className="col-6 mx-auto">
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={newEmp}>
              Add
            </button>
          </div>
        ) : (
          <>
            {/* 제목 start */}
            <TitleCom title="Add Emp Nopage" />
            {/* 제목 end */}
  
            <div className="col-6 mx-auto">
              <div className="row g-3 align-items-center mb-3">
                <div className="col-3">
                  <label htmlFor="ename" className="col-form-label">
                    Ename
                  </label>
                </div>
  
                <div className="col-9">
                  <input
                    type="text"
                    id="ename"
                    required
                    className="form-control"
                    value={emp.ename}
                    onChange={handleInputChange}
                    placeholder="ename"
                    name="ename"
                  />
                </div>
              </div>
  
              <div className="row g-3 align-items-center mb-3">
                <div className="col-3">
                  <label htmlFor="job" className="col-form-label">
                    Job
                  </label>
                </div>
                <div className="col-9">
                  <input
                    type="text"
                    id="job"
                    required
                    className="form-control"
                    value={emp.job}
                    onChange={handleInputChange}
                    placeholder="job"
                    name="job"
                  />
                </div>
              </div>
  
              <div className="row g-3 align-items-center mb-3">
                <div className="col-3">
                  <label htmlFor="manager" className="col-form-label">
                    Manager
                  </label>
                </div>
                <div className="col-9">
                  <input
                    type="text"
                    id="manager"
                    required
                    className="form-control"
                    value={emp.manager}
                    onChange={handleInputChange}
                    placeholder="manager"
                    name="manager"
                  />
                </div>
              </div>
  
              <div className="row g-3 align-items-center mb-3">
                <div className="col-3">
                  <label htmlFor="hiredate" className="col-form-label">
                    Hiredate
                  </label>
                </div>
                <div className="col-9">
                  <input
                    type="text"
                    id="hiredate"
                    required
                    className="form-control"
                    value={emp.hiredate}
                    onChange={handleInputChange}
                    placeholder="hiredate"
                    name="hiredate"
                  />
                </div>
              </div>
  
              <div className="row g-3 align-items-center mb-3">
                <div className="col-3">
                  <label htmlFor="salary" className="col-form-label">
                    Salary
                  </label>
                </div>
                <div className="col-9">
                  <input
                    type="text"
                    id="salary"
                    required
                    className="form-control"
                    value={emp.salary}
                    onChange={handleInputChange}
                    placeholder="salary"
                    name="salary"
                  />
                </div>
              </div>
  
              <div className="row g-3 align-items-center mb-3">
                <div className="col-3">
                  <label htmlFor="commission" className="col-form-label">
                    Commission
                  </label>
                </div>
                <div className="col-9">
                  <input
                    type="text"
                    id="commission"
                    required
                    className="form-control"
                    value={emp.commission}
                    onChange={handleInputChange}
                    placeholder="commission"
                    name="commission"
                  />
                </div>
              </div>
  
              <div className="row g-3 align-items-center mb-3">
                <div className="col-3">
                  <label htmlFor="dno" className="col-form-label">
                    Dno
                  </label>
                </div>
                <div className="col-9">
                  <input
                    type="text"
                    id="dno"
                    required
                    className="form-control"
                    value={emp.dno}
                    onChange={handleInputChange}
                    placeholder="dno"
                    name="dno"
                  />
                </div>
              </div>
  
              <div className="row g-3 mt-3 mb-3">
                <button onClick={saveEmp} className="btn btn-outline-primary ms-2 col">
                  Submit
                </button>
              </div>
            </div>
          </>
        )}
      </div>
  )
}

export default AddEmpNop
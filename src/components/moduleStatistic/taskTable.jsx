import "./taskTable.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function TaskTable() {
  return (
    <>
      <div className="TaskTableContainer">
        <table className="TaskTable">
          <thead>
            <tr>
              <th>Tasks</th>
              <th>Status</th>
              <th>Date of Submission</th>
              <th>Progress</th>
              <th></th>
            </tr>
          </thead>
          <tbody>

            <tr key="tutorial1">
              <td>Tutorial 1</td>
              <td>
                <div className="Submitted">Submitted</div>
              </td>
              <td>24/6/2024</td>
              <td>
                <div className="ProgbarTableCont1">
                  75
                  <div className="ProgbarTableCont2">
                    <CircularProgressbar value={75} />
                  </div>
                </div>
              </td>
              <td>
                <button className="btn">View</button>
              </td>
            </tr>


            <tr key="tutorial2">
              <td>Tutorial 2</td>
              <td>
                <div className="Unsubmitted">Unsubmitted</div>
              </td>
              <td>--/--/--</td>
              <td>
                <div className="ProgbarTableCont1">
                  50
                  <div className="ProgbarTableCont2">
                    <CircularProgressbar value={50} />
                  </div>
                </div>
              </td>
              <td>
                <button className="btn">View</button>
              </td>
            </tr>

            <tr key="tutorial3">
              <td>Tutorial 3</td>
              <td>
                <div className="Submitted">Submitted</div>
              </td>
              <td>19/6/2024</td>
              <td>
                <div className="ProgbarTableCont1">
                  25
                  <div className="ProgbarTableCont2">
                    <CircularProgressbar value={25} />
                  </div>
                </div>
              </td>
              <td>
                <button className="btn">View</button>
              </td>
            </tr>

            <tr key="tutorial4">
              <td>Tutorial 4</td>
              <td>
                <div className="Submitted">Submitted</div>
              </td>
              <td>17/7/2024</td>
              <td>
                <div className="ProgbarTableCont1">
                  100
                  <div className="ProgbarTableCont2">
                    <CircularProgressbar value={100} />
                  </div>
                </div>
              </td>
              <td>
                <button className="btn">View</button>
              </td>
            </tr>

            <tr key="tutorial5">
              <td>Tutorial 5</td>
              <td>
                <div className="Submitted">Submitted</div>
              </td>
              <td>17/7/2024</td>
              <td>
                <div className="ProgbarTableCont1">
                  100
                  <div className="ProgbarTableCont2">
                    <CircularProgressbar value={100} />
                  </div>
                </div>
              </td>
              <td>
                <button className="btn">View</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TaskTable;
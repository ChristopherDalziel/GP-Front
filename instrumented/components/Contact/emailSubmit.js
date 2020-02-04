function cov_j7ac4hmtb() {
  var path = "/Users/nhan.dang/Coder_Academy/NhanDang_T3A2/GP-Front/src/components/Contact/emailSubmit.js";
  var hash = "542b64b5d387e6b7882fecce9933fc3286deb141";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/nhan.dang/Coder_Academy/NhanDang_T3A2/GP-Front/src/components/Contact/emailSubmit.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 0
        },
        end: {
          line: 4,
          column: 16
        }
      },
      "1": {
        start: {
          line: 15,
          column: 6
        },
        end: {
          line: 15,
          column: 12
        }
      },
      "2": {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 27,
          column: 3
        }
      },
      "3": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 24,
          column: 7
        }
      },
      "4": {
        start: {
          line: 26,
          column: 4
        },
        end: {
          line: 26,
          column: 29
        }
      }
    },
    fnMap: {
      "0": {
        name: "handleSubmit",
        decl: {
          start: {
            line: 7,
            column: 15
          },
          end: {
            line: 7,
            column: 27
          }
        },
        loc: {
          start: {
            line: 7,
            column: 36
          },
          end: {
            line: 28,
            column: 1
          }
        },
        line: 7
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "542b64b5d387e6b7882fecce9933fc3286deb141"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_j7ac4hmtb = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_j7ac4hmtb();
import axios from "axios";
import dotenv from "dotenv";
cov_j7ac4hmtb().s[0]++;
dotenv.config(); // Email submission function

async function handleSubmit(values) {
  cov_j7ac4hmtb().f[0]++;
  const {
    first_name,
    last_name,
    contact_number,
    subject,
    email,
    message
  } = (cov_j7ac4hmtb().s[1]++, values);
  cov_j7ac4hmtb().s[2]++;

  try {
    cov_j7ac4hmtb().s[3]++;
    await axios.post(process.env.REACT_APP_BACKEND_URL + "/mail/send", {
      first_name,
      last_name,
      contact_number,
      subject,
      email,
      message
    });
  } catch (err) {
    cov_j7ac4hmtb().s[4]++;
    console.log(err.message);
  }
}

export default handleSubmit;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtYWlsU3VibWl0LmpzIl0sIm5hbWVzIjpbImF4aW9zIiwiZG90ZW52IiwiY29uZmlnIiwiaGFuZGxlU3VibWl0IiwidmFsdWVzIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsImNvbnRhY3RfbnVtYmVyIiwic3ViamVjdCIsImVtYWlsIiwibWVzc2FnZSIsInBvc3QiLCJwcm9jZXNzIiwiZW52IiwiUkVBQ1RfQVBQX0JBQ0tFTkRfVVJMIiwiZXJyIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixRQUFuQjs7QUFFQUEsTUFBTSxDQUFDQyxNQUFQLEcsQ0FFQTs7QUFDQSxlQUFlQyxZQUFmLENBQTRCQyxNQUE1QixFQUFvQztBQUFBO0FBQ2xDLFFBQU07QUFDSkMsSUFBQUEsVUFESTtBQUVKQyxJQUFBQSxTQUZJO0FBR0pDLElBQUFBLGNBSEk7QUFJSkMsSUFBQUEsT0FKSTtBQUtKQyxJQUFBQSxLQUxJO0FBTUpDLElBQUFBO0FBTkksK0JBT0ZOLE1BUEUsQ0FBTjtBQURrQzs7QUFTbEMsTUFBSTtBQUFBO0FBQ0YsVUFBTUosS0FBSyxDQUFDVyxJQUFOLENBQVdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxxQkFBWixHQUFvQyxZQUEvQyxFQUE2RDtBQUNqRVQsTUFBQUEsVUFEaUU7QUFFakVDLE1BQUFBLFNBRmlFO0FBR2pFQyxNQUFBQSxjQUhpRTtBQUlqRUMsTUFBQUEsT0FKaUU7QUFLakVDLE1BQUFBLEtBTGlFO0FBTWpFQyxNQUFBQTtBQU5pRSxLQUE3RCxDQUFOO0FBUUQsR0FURCxDQVNFLE9BQU9LLEdBQVAsRUFBWTtBQUFBO0FBQ1pDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFHLENBQUNMLE9BQWhCO0FBQ0Q7QUFDRjs7QUFFRCxlQUFlUCxZQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IGRvdGVudiBmcm9tIFwiZG90ZW52XCI7XG5cbmRvdGVudi5jb25maWcoKTtcblxuLy8gRW1haWwgc3VibWlzc2lvbiBmdW5jdGlvblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KHZhbHVlcykge1xuICBjb25zdCB7XG4gICAgZmlyc3RfbmFtZSxcbiAgICBsYXN0X25hbWUsXG4gICAgY29udGFjdF9udW1iZXIsXG4gICAgc3ViamVjdCxcbiAgICBlbWFpbCxcbiAgICBtZXNzYWdlXG4gIH0gPSB2YWx1ZXM7XG4gIHRyeSB7XG4gICAgYXdhaXQgYXhpb3MucG9zdChwcm9jZXNzLmVudi5SRUFDVF9BUFBfQkFDS0VORF9VUkwgKyBcIi9tYWlsL3NlbmRcIiwge1xuICAgICAgZmlyc3RfbmFtZSxcbiAgICAgIGxhc3RfbmFtZSxcbiAgICAgIGNvbnRhY3RfbnVtYmVyLFxuICAgICAgc3ViamVjdCxcbiAgICAgIGVtYWlsLFxuICAgICAgbWVzc2FnZVxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlU3VibWl0O1xuIl19
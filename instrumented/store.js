function cov_19l6pcysr0() {
  var path = "/Users/nhan.dang/Coder_Academy/NhanDang_T3A2/GP-Front/src/store.js";
  var hash = "deb367e69695ef7fff7cf43a2f012404f89a42f0";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/nhan.dang/Coder_Academy/NhanDang_T3A2/GP-Front/src/store.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 21
        },
        end: {
          line: 6,
          column: 23
        }
      },
      "1": {
        start: {
          line: 8,
          column: 19
        },
        end: {
          line: 8,
          column: 26
        }
      },
      "2": {
        start: {
          line: 10,
          column: 14
        },
        end: {
          line: 14,
          column: 1
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "deb367e69695ef7fff7cf43a2f012404f89a42f0"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_19l6pcysr0 = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_19l6pcysr0();
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
const initialState = (cov_19l6pcysr0().s[0]++, {});
const middleware = (cov_19l6pcysr0().s[1]++, [thunk]);
const store = (cov_19l6pcysr0().s[2]++, createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware))));
export default store;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsInRodW5rIiwicm9vdFJlZHVjZXIiLCJpbml0aWFsU3RhdGUiLCJtaWRkbGV3YXJlIiwic3RvcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFTQSxXQUFULEVBQXNCQyxlQUF0QixRQUE2QyxPQUE3QztBQUNBLFNBQVNDLG1CQUFULFFBQW9DLDBCQUFwQztBQUNBLE9BQU9DLEtBQVAsTUFBa0IsYUFBbEI7QUFDQSxPQUFPQyxXQUFQLE1BQXdCLFlBQXhCO0FBRUEsTUFBTUMsWUFBWSw2QkFBRyxFQUFILENBQWxCO0FBRUEsTUFBTUMsVUFBVSw2QkFBRyxDQUFDSCxLQUFELENBQUgsQ0FBaEI7QUFFQSxNQUFNSSxLQUFLLDZCQUFHUCxXQUFXLENBQ3ZCSSxXQUR1QixFQUV2QkMsWUFGdUIsRUFHdkJILG1CQUFtQixDQUFDRCxlQUFlLENBQUMsR0FBR0ssVUFBSixDQUFoQixDQUhJLENBQWQsQ0FBWDtBQU1BLGVBQWVDLEtBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiO1xuaW1wb3J0IHRodW5rIGZyb20gXCJyZWR1eC10aHVua1wiO1xuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gXCIuL3JlZHVjZXJzXCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9O1xuXG5jb25zdCBtaWRkbGV3YXJlID0gW3RodW5rXTtcblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcbiAgcm9vdFJlZHVjZXIsXG4gIGluaXRpYWxTdGF0ZSxcbiAgY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSkpXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcbiJdfQ==
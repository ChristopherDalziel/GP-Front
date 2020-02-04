function cov_1hb2pr7z32() {
  var path = "/Users/nhan.dang/Coder_Academy/NhanDang_T3A2/GP-Front/src/pages/store.js";
  var hash = "f8bb3e4821ee26b89a84905b14b920e35d50492c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/nhan.dang/Coder_Academy/NhanDang_T3A2/GP-Front/src/pages/store.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 20
        },
        end: {
          line: 7,
          column: 2
        }
      },
      "1": {
        start: {
          line: 9,
          column: 21
        },
        end: {
          line: 12,
          column: 1
        }
      }
    },
    fnMap: {},
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 11,
            column: 2
          },
          end: {
            line: 11,
            column: 78
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 11,
            column: 2
          },
          end: {
            line: 11,
            column: 37
          }
        }, {
          start: {
            line: 11,
            column: 41
          },
          end: {
            line: 11,
            column: 78
          }
        }],
        line: 11
      }
    },
    s: {
      "0": 0,
      "1": 0
    },
    f: {},
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "f8bb3e4821ee26b89a84905b14b920e35d50492c"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_1hb2pr7z32 = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_1hb2pr7z32();
import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form"; // We need a store for the redux forms?

const rootReducer = (cov_1hb2pr7z32().s[0]++, combineReducers({
  form: formReducer
}));
export const store = (cov_1hb2pr7z32().s[1]++, createStore(rootReducer, (cov_1hb2pr7z32().b[0][0]++, window.__REDUX_DEVTOOLS_EXTENSION__) && (cov_1hb2pr7z32().b[0][1]++, window.__REDUX_DEVTOOLS_EXTENSION__())));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVN0b3JlIiwiY29tYmluZVJlZHVjZXJzIiwicmVkdWNlciIsImZvcm1SZWR1Y2VyIiwicm9vdFJlZHVjZXIiLCJmb3JtIiwic3RvcmUiLCJ3aW5kb3ciLCJfX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVNBLFdBQVQsRUFBc0JDLGVBQXRCLFFBQTZDLE9BQTdDO0FBQ0EsU0FBU0MsT0FBTyxJQUFJQyxXQUFwQixRQUF1QyxZQUF2QyxDLENBRUE7O0FBQ0EsTUFBTUMsV0FBVyw2QkFBR0gsZUFBZSxDQUFDO0FBQ2xDSSxFQUFBQSxJQUFJLEVBQUVGO0FBRDRCLENBQUQsQ0FBbEIsQ0FBakI7QUFJQSxPQUFPLE1BQU1HLEtBQUssNkJBQUdOLFdBQVcsQ0FDOUJJLFdBRDhCLEVBRTlCLDZCQUFBRyxNQUFNLENBQUNDLDRCQUFQLGtDQUF1Q0QsTUFBTSxDQUFDQyw0QkFBUCxFQUF2QyxDQUY4QixDQUFkLENBQVgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgeyByZWR1Y2VyIGFzIGZvcm1SZWR1Y2VyIH0gZnJvbSBcInJlZHV4LWZvcm1cIjtcblxuLy8gV2UgbmVlZCBhIHN0b3JlIGZvciB0aGUgcmVkdXggZm9ybXM/XG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGZvcm06IGZvcm1SZWR1Y2VyXG59KTtcblxuZXhwb3J0IGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXG4gIHJvb3RSZWR1Y2VyLFxuICB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXyAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXygpXG4pO1xuIl19
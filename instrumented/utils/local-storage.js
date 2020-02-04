function cov_1zb09rzjkf() {
  var path = "/Users/nhan.dang/Coder_Academy/NhanDang_T3A2/GP-Front/src/utils/local-storage.js";
  var hash = "ba66dfddf2ea2e5460be7f08a37ee7b29eb4479f";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/nhan.dang/Coder_Academy/NhanDang_T3A2/GP-Front/src/utils/local-storage.js",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 31
        },
        end: {
          line: 7,
          column: 1
        }
      },
      "1": {
        start: {
          line: 3,
          column: 2
        },
        end: {
          line: 3,
          column: 50
        }
      },
      "2": {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 4,
          column: 49
        }
      },
      "3": {
        start: {
          line: 5,
          column: 2
        },
        end: {
          line: 5,
          column: 43
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 2,
            column: 31
          },
          end: {
            line: 2,
            column: 32
          }
        },
        loc: {
          start: {
            line: 2,
            column: 45
          },
          end: {
            line: 7,
            column: 1
          }
        },
        line: 2
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "ba66dfddf2ea2e5460be7f08a37ee7b29eb4479f"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_1zb09rzjkf = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_1zb09rzjkf();
cov_1zb09rzjkf().s[0]++;
export const setLocalStorage = response => {
  cov_1zb09rzjkf().f[0]++;
  cov_1zb09rzjkf().s[1]++;
  sessionStorage.setItem('token', response.token);
  cov_1zb09rzjkf().s[2]++;
  sessionStorage.setItem('admin', response.admin);
  cov_1zb09rzjkf().s[3]++;
  sessionStorage.setItem('loggedIn', true);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvY2FsLXN0b3JhZ2UuanMiXSwibmFtZXMiOlsic2V0TG9jYWxTdG9yYWdlIiwicmVzcG9uc2UiLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJ0b2tlbiIsImFkbWluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyxNQUFNQSxlQUFlLEdBQUlDLFFBQUQsSUFBYztBQUFBO0FBQUE7QUFDM0NDLEVBQUFBLGNBQWMsQ0FBQ0MsT0FBZixDQUF1QixPQUF2QixFQUFnQ0YsUUFBUSxDQUFDRyxLQUF6QztBQUQyQztBQUUzQ0YsRUFBQUEsY0FBYyxDQUFDQyxPQUFmLENBQXVCLE9BQXZCLEVBQWdDRixRQUFRLENBQUNJLEtBQXpDO0FBRjJDO0FBRzNDSCxFQUFBQSxjQUFjLENBQUNDLE9BQWYsQ0FBdUIsVUFBdkIsRUFBbUMsSUFBbkM7QUFFRCxDQUxNIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgY29uc3Qgc2V0TG9jYWxTdG9yYWdlID0gKHJlc3BvbnNlKSA9PiB7XG4gIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgcmVzcG9uc2UudG9rZW4pO1xuICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdhZG1pbicsIHJlc3BvbnNlLmFkbWluKVxuICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdsb2dnZWRJbicsIHRydWUpO1xuXG59XG5cblxuXG5cbiJdfQ==
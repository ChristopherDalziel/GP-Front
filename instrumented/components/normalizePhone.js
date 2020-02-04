function cov_2h8lhiwsqx() {
  var path = "/Users/nhan.dang/Coder_Academy/NhanDang_T3A2/GP-Front/src/components/normalizePhone.js";
  var hash = "72be27693c5a4cdb2a4b340b283b2715824dcad8";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/nhan.dang/Coder_Academy/NhanDang_T3A2/GP-Front/src/components/normalizePhone.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 23
        },
        end: {
          line: 9,
          column: 1
        }
      },
      "1": {
        start: {
          line: 2,
          column: 2
        },
        end: {
          line: 4,
          column: 3
        }
      },
      "2": {
        start: {
          line: 3,
          column: 4
        },
        end: {
          line: 3,
          column: 16
        }
      },
      "3": {
        start: {
          line: 5,
          column: 19
        },
        end: {
          line: 5,
          column: 46
        }
      },
      "4": {
        start: {
          line: 6,
          column: 2
        },
        end: {
          line: 8,
          column: 5
        }
      },
      "5": {
        start: {
          line: 7,
          column: 6
        },
        end: {
          line: 7,
          column: 21
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 1,
            column: 23
          },
          end: {
            line: 1,
            column: 24
          }
        },
        loc: {
          start: {
            line: 1,
            column: 49
          },
          end: {
            line: 9,
            column: 1
          }
        },
        line: 1
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 2,
            column: 2
          },
          end: {
            line: 4,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 2,
            column: 2
          },
          end: {
            line: 4,
            column: 3
          }
        }, {
          start: {
            line: 2,
            column: 2
          },
          end: {
            line: 4,
            column: 3
          }
        }],
        line: 2
      },
      "1": {
        loc: {
          start: {
            line: 6,
            column: 2
          },
          end: {
            line: 8,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 6,
            column: 2
          },
          end: {
            line: 8,
            column: 5
          }
        }, {
          start: {
            line: 6,
            column: 2
          },
          end: {
            line: 8,
            column: 5
          }
        }],
        line: 6
      },
      "2": {
        loc: {
          start: {
            line: 6,
            column: 6
          },
          end: {
            line: 6,
            column: 59
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 6,
            column: 6
          },
          end: {
            line: 6,
            column: 20
          }
        }, {
          start: {
            line: 6,
            column: 24
          },
          end: {
            line: 6,
            column: 59
          }
        }],
        line: 6
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "72be27693c5a4cdb2a4b340b283b2715824dcad8"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_2h8lhiwsqx = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_2h8lhiwsqx();
cov_2h8lhiwsqx().s[0]++;

const normalizePhone = (value, previousValue) => {
  cov_2h8lhiwsqx().f[0]++;
  cov_2h8lhiwsqx().s[1]++;

  if (!value) {
    cov_2h8lhiwsqx().b[0][0]++;
    cov_2h8lhiwsqx().s[2]++;
    return value;
  } else {
    cov_2h8lhiwsqx().b[0][1]++;
  }

  const onlyNums = (cov_2h8lhiwsqx().s[3]++, value.replace(/[^\d]/g, ''));
  cov_2h8lhiwsqx().s[4]++;

  if ((cov_2h8lhiwsqx().b[2][0]++, !previousValue) || (cov_2h8lhiwsqx().b[2][1]++, value.length > previousValue.length)) {
    cov_2h8lhiwsqx().b[1][0]++;
    cov_2h8lhiwsqx().s[5]++;
    return onlyNums;
  } else {
    cov_2h8lhiwsqx().b[1][1]++;
  }
};

export default normalizePhone;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vcm1hbGl6ZVBob25lLmpzIl0sIm5hbWVzIjpbIm5vcm1hbGl6ZVBob25lIiwidmFsdWUiLCJwcmV2aW91c1ZhbHVlIiwib25seU51bXMiLCJyZXBsYWNlIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE1BQU1BLGNBQWMsR0FBRyxDQUFDQyxLQUFELEVBQVFDLGFBQVIsS0FBMEI7QUFBQTtBQUFBOztBQUMvQyxNQUFJLENBQUNELEtBQUwsRUFBWTtBQUFBO0FBQUE7QUFDVixXQUFPQSxLQUFQO0FBQ0QsR0FGRDtBQUFBO0FBQUE7O0FBR0EsUUFBTUUsUUFBUSw2QkFBR0YsS0FBSyxDQUFDRyxPQUFOLENBQWMsUUFBZCxFQUF3QixFQUF4QixDQUFILENBQWQ7QUFKK0M7O0FBSy9DLE1BQUksOEJBQUNGLGFBQUQsa0NBQWtCRCxLQUFLLENBQUNJLE1BQU4sR0FBZUgsYUFBYSxDQUFDRyxNQUEvQyxDQUFKLEVBQTJEO0FBQUE7QUFBQTtBQUN2RCxXQUFPRixRQUFQO0FBQ0QsR0FGSDtBQUFBO0FBQUE7QUFHRCxDQVJEOztBQVVBLGVBQWVILGNBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBub3JtYWxpemVQaG9uZSA9ICh2YWx1ZSwgcHJldmlvdXNWYWx1ZSkgPT4ge1xuICBpZiAoIXZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cbiAgY29uc3Qgb25seU51bXMgPSB2YWx1ZS5yZXBsYWNlKC9bXlxcZF0vZywgJycpXG4gIGlmICghcHJldmlvdXNWYWx1ZSB8fCB2YWx1ZS5sZW5ndGggPiBwcmV2aW91c1ZhbHVlLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG9ubHlOdW1zXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBub3JtYWxpemVQaG9uZSJdfQ==
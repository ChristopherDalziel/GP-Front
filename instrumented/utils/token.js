function cov_7foi0m5pa() {
  var path = "/Users/nhan.dang/Coder_Academy/NhanDang_T3A2/GP-Front/src/utils/token.js";
  var hash = "670f1e65efac46e1905538b24405eecba3ea0715";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/nhan.dang/Coder_Academy/NhanDang_T3A2/GP-Front/src/utils/token.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 26
        },
        end: {
          line: 29,
          column: 1
        }
      },
      "1": {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 28,
          column: 3
        }
      },
      "2": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 22,
          column: 4
        }
      },
      "3": {
        start: {
          line: 10,
          column: 6
        },
        end: {
          line: 10,
          column: 40
        }
      },
      "4": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 21,
          column: 5
        }
      },
      "5": {
        start: {
          line: 12,
          column: 6
        },
        end: {
          line: 15,
          column: 8
        }
      },
      "6": {
        start: {
          line: 17,
          column: 8
        },
        end: {
          line: 20,
          column: 8
        }
      },
      "7": {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 27,
          column: 7
        }
      },
      "8": {
        start: {
          line: 32,
          column: 34
        },
        end: {
          line: 53,
          column: 1
        }
      },
      "9": {
        start: {
          line: 33,
          column: 2
        },
        end: {
          line: 52,
          column: 3
        }
      },
      "10": {
        start: {
          line: 34,
          column: 4
        },
        end: {
          line: 41,
          column: 6
        }
      },
      "11": {
        start: {
          line: 42,
          column: 4
        },
        end: {
          line: 45,
          column: 7
        }
      },
      "12": {
        start: {
          line: 47,
          column: 4
        },
        end: {
          line: 47,
          column: 29
        }
      },
      "13": {
        start: {
          line: 48,
          column: 4
        },
        end: {
          line: 51,
          column: 7
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 26
          },
          end: {
            line: 3,
            column: 27
          }
        },
        loc: {
          start: {
            line: 3,
            column: 52
          },
          end: {
            line: 29,
            column: 1
          }
        },
        line: 3
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 9,
            column: 12
          },
          end: {
            line: 9,
            column: 13
          }
        },
        loc: {
          start: {
            line: 9,
            column: 26
          },
          end: {
            line: 22,
            column: 3
          }
        },
        line: 9
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 32,
            column: 34
          },
          end: {
            line: 32,
            column: 35
          }
        },
        loc: {
          start: {
            line: 32,
            column: 60
          },
          end: {
            line: 53,
            column: 1
          }
        },
        line: 32
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 21,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 21,
            column: 5
          }
        }, {
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 21,
            column: 5
          }
        }],
        line: 11
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "670f1e65efac46e1905538b24405eecba3ea0715"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_7foi0m5pa = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_7foi0m5pa();
import axios from "axios";
cov_7foi0m5pa().s[0]++;
export const checkToken = async (token, setUser) => {
  cov_7foi0m5pa().f[0]++;
  cov_7foi0m5pa().s[1]++;

  try {
    cov_7foi0m5pa().s[2]++;
    await axios.get(process.env.REACT_APP_BACKEND_URL + "/users/check-token", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(response => {
      cov_7foi0m5pa().f[1]++;
      cov_7foi0m5pa().s[3]++;
      console.log(response.data.success);
      cov_7foi0m5pa().s[4]++;

      if (response.data.success === false) {
        cov_7foi0m5pa().b[0][0]++;
        cov_7foi0m5pa().s[5]++;
        setUser({
          auth: false,
          loading: false
        });
      } else {
        cov_7foi0m5pa().b[0][1]++;
        cov_7foi0m5pa().s[6]++;
        setUser({
          auth: true,
          loading: false
        });
      }
    });
  } catch (err) {
    cov_7foi0m5pa().s[7]++;
    setUser({
      auth: false,
      loading: false
    });
  }
}; // Checking that the password token is valid

cov_7foi0m5pa().s[8]++;
export const checkPasswordToken = async (token, setUser) => {
  cov_7foi0m5pa().f[2]++;
  cov_7foi0m5pa().s[9]++;

  try {
    cov_7foi0m5pa().s[10]++;
    await axios.get(process.env.REACT_APP_BACKEND_URL + "/users/check-password-token", {
      headers: {
        token
      }
    });
    cov_7foi0m5pa().s[11]++;
    setUser({
      auth: true,
      loading: false
    });
  } catch (err) {
    cov_7foi0m5pa().s[12]++;
    console.log(err.message);
    cov_7foi0m5pa().s[13]++;
    setUser({
      auth: false,
      loading: false
    });
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRva2VuLmpzIl0sIm5hbWVzIjpbImF4aW9zIiwiY2hlY2tUb2tlbiIsInRva2VuIiwic2V0VXNlciIsImdldCIsInByb2Nlc3MiLCJlbnYiLCJSRUFDVF9BUFBfQkFDS0VORF9VUkwiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwic3VjY2VzcyIsImF1dGgiLCJsb2FkaW5nIiwiZXJyIiwiY2hlY2tQYXNzd29yZFRva2VuIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7O0FBRUEsT0FBTyxNQUFNQyxVQUFVLEdBQUcsT0FBT0MsS0FBUCxFQUFjQyxPQUFkLEtBQTBCO0FBQUE7QUFBQTs7QUFDbEQsTUFBSTtBQUFBO0FBQ0YsVUFBTUgsS0FBSyxDQUFDSSxHQUFOLENBQVVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxxQkFBWixHQUFvQyxvQkFBOUMsRUFBb0U7QUFDeEVDLE1BQUFBLE9BQU8sRUFBRTtBQUNQQyxRQUFBQSxhQUFhLEVBQUcsVUFBU1AsS0FBTTtBQUR4QjtBQUQrRCxLQUFwRSxFQUlIUSxJQUpHLENBSUdDLFFBQUQsSUFBYztBQUFBO0FBQUE7QUFDcEJDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFRLENBQUNHLElBQVQsQ0FBY0MsT0FBMUI7QUFEb0I7O0FBRXRCLFVBQUlKLFFBQVEsQ0FBQ0csSUFBVCxDQUFjQyxPQUFkLEtBQTBCLEtBQTlCLEVBQXFDO0FBQUE7QUFBQTtBQUNuQ1osUUFBQUEsT0FBTyxDQUFDO0FBQ05hLFVBQUFBLElBQUksRUFBRSxLQURBO0FBRU5DLFVBQUFBLE9BQU8sRUFBRTtBQUZILFNBQUQsQ0FBUDtBQUlELE9BTEQsTUFLTztBQUFBO0FBQUE7QUFDSGQsUUFBQUEsT0FBTyxDQUFDO0FBQ1JhLFVBQUFBLElBQUksRUFBRSxJQURFO0FBRVJDLFVBQUFBLE9BQU8sRUFBRTtBQUZELFNBQUQsQ0FBUDtBQUlIO0FBQ0YsS0FqQk8sQ0FBTjtBQWtCRCxHQW5CRCxDQW1CRSxPQUFPQyxHQUFQLEVBQVk7QUFBQTtBQUNaZixJQUFBQSxPQUFPLENBQUM7QUFDTmEsTUFBQUEsSUFBSSxFQUFFLEtBREE7QUFFTkMsTUFBQUEsT0FBTyxFQUFFO0FBRkgsS0FBRCxDQUFQO0FBSUQ7QUFDRixDQTFCTSxDLENBNEJQOzs7QUFDQSxPQUFPLE1BQU1FLGtCQUFrQixHQUFHLE9BQU9qQixLQUFQLEVBQWNDLE9BQWQsS0FBMEI7QUFBQTtBQUFBOztBQUMxRCxNQUFJO0FBQUE7QUFDRixVQUFNSCxLQUFLLENBQUNJLEdBQU4sQ0FDSkMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLHFCQUFaLEdBQW9DLDZCQURoQyxFQUVKO0FBQ0VDLE1BQUFBLE9BQU8sRUFBRTtBQUNQTixRQUFBQTtBQURPO0FBRFgsS0FGSSxDQUFOO0FBREU7QUFTRkMsSUFBQUEsT0FBTyxDQUFDO0FBQ05hLE1BQUFBLElBQUksRUFBRSxJQURBO0FBRU5DLE1BQUFBLE9BQU8sRUFBRTtBQUZILEtBQUQsQ0FBUDtBQUlELEdBYkQsQ0FhRSxPQUFPQyxHQUFQLEVBQVk7QUFBQTtBQUNaTixJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUssR0FBRyxDQUFDRSxPQUFoQjtBQURZO0FBRVpqQixJQUFBQSxPQUFPLENBQUM7QUFDTmEsTUFBQUEsSUFBSSxFQUFFLEtBREE7QUFFTkMsTUFBQUEsT0FBTyxFQUFFO0FBRkgsS0FBRCxDQUFQO0FBSUQ7QUFDRixDQXJCTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGNvbnN0IGNoZWNrVG9rZW4gPSBhc3luYyAodG9rZW4sIHNldFVzZXIpID0+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBheGlvcy5nZXQocHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0JBQ0tFTkRfVVJMICsgXCIvdXNlcnMvY2hlY2stdG9rZW5cIiwge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YFxuICAgICAgfSxcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5zdWNjZXNzKVxuICAgIGlmIChyZXNwb25zZS5kYXRhLnN1Y2Nlc3MgPT09IGZhbHNlKSB7XG4gICAgICBzZXRVc2VyKHtcbiAgICAgICAgYXV0aDogZmFsc2UsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFVzZXIoe1xuICAgICAgICBhdXRoOiB0cnVlLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgfSlcbiAgICB9XG4gIH0pXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHNldFVzZXIoe1xuICAgICAgYXV0aDogZmFsc2UsXG4gICAgICBsb2FkaW5nOiBmYWxzZVxuICAgIH0pO1xuICB9XG59O1xuXG4vLyBDaGVja2luZyB0aGF0IHRoZSBwYXNzd29yZCB0b2tlbiBpcyB2YWxpZFxuZXhwb3J0IGNvbnN0IGNoZWNrUGFzc3dvcmRUb2tlbiA9IGFzeW5jICh0b2tlbiwgc2V0VXNlcikgPT4ge1xuICB0cnkge1xuICAgIGF3YWl0IGF4aW9zLmdldChcbiAgICAgIHByb2Nlc3MuZW52LlJFQUNUX0FQUF9CQUNLRU5EX1VSTCArIFwiL3VzZXJzL2NoZWNrLXBhc3N3b3JkLXRva2VuXCIsXG4gICAgICB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICB0b2tlblxuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgICBzZXRVc2VyKHtcbiAgICAgIGF1dGg6IHRydWUsXG4gICAgICBsb2FkaW5nOiBmYWxzZVxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XG4gICAgc2V0VXNlcih7XG4gICAgICBhdXRoOiBmYWxzZSxcbiAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgfSk7XG4gIH1cbn07XG4iXX0=
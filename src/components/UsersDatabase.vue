<template>
  <div>
    <section>
      <!--for demo wrap-->
      <h1>Patients Database</h1>
      <div class="tbl-header">
        <table cellpadding="0" cellspacing="0" border="0">
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Result</th>
            </tr>
          </thead>
        </table>
      </div>
      <div class="tbl-content">
        <table cellpadding="0" cellspacing="0" border="0">
          <tbody>
            <tr v-for="patient in patients" :key="patient._id">
              <td>{{patient._id.substring(20,24)}}</td>
              <td>{{patient.name}}</td>
              <td>{{patient.age}}</td>
              <td>{{patient.result}}</td>
            </tr>
            <!-- <tr>
              <td>AAC</td>
              <td>AUSTRALIAN COMPANY</td>
              <td>$1.38</td>
              <td>+2.01</td>
            </tr>
            <tr>
              <td>AAD</td>
              <td>AUSENCO</td>
              <td>$2.38</td>
              <td>-0.01</td>
            </tr>-->
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      patients: []
    };
  },
  beforeMount() {
    axios({
      method: "GET",
      url: "http://localhost:3000/api/getPatientsDatabase",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8"
      }
    })
      .then(res => {
        this.patients = res.data.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
h1 {
  font-size: 30px;
  color: rgb(48, 48, 48);
  text-transform: uppercase;
  font-weight: 300;
  text-align: center;
  margin-bottom: 15px;
}
table {
  width: 100%;
  table-layout: fixed;
}
.tbl-header {
  background-color: rgba(230, 230, 230, 0.945);
}
.tbl-content {
  overflow-x: auto;
  margin-top: 0px;
  border: 1px solid rgba(218, 210, 210, 0.925);
}
th {
  padding: 20px 15px;
  text-align: left;
  font-weight: 500;
  font-size: 12px;
  color: rgb(48, 48, 48);
  text-transform: uppercase;
}
td {
  padding: 15px;
  text-align: left;
  vertical-align: middle;
  font-weight: 300;
  font-size: 12px;
  color: rgb(48, 48, 48);
  border-bottom: solid 1px rgba(197, 196, 196, 0.918);
}

/* demo styles */

@import url(https://fonts.googleapis.com/css?family=Roboto:400, 500, 300, 700);
body {
  background: -webkit-linear-gradient(left, #25c481, #25b7c4);
  background: linear-gradient(to right, #25c481, #25b7c4);
  font-family: "Roboto", sans-serif;
}
section {
  margin: 50px;
}

/* follow me template */
.made-with-love {
  margin-top: 40px;
  padding: 10px;
  clear: left;
  text-align: center;
  font-size: 10px;
  font-family: arial;
  color: rgb(48, 48, 48);
}
.made-with-love i {
  font-style: normal;
  color: #f50057;
  font-size: 14px;
  position: relative;
  top: 2px;
}
.made-with-love a {
  color: rgb(48, 48, 48);
  text-decoration: none;
}
.made-with-love a:hover {
  text-decoration: underline;
}

/* for custom scrollbar for webkit browser*/

::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
::-webkit-scrollbar-thumb {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
</style>

// id, name, age , result
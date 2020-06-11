<template>
  <div>
    <div class="page">
      <!-- Main Navbar-->
      <header class="header">
        <nav class="navbar">
          <!-- Search Box-->
          <div class="search-box">
            <button class="dismiss">
              <i class="icon-close"></i>
            </button>
            <form id="searchForm" action="#" role="search">
              <input type="search" placeholder="What are you looking for..." class="form-control" />
            </form>
          </div>
          <div class="container-fluid">
            <div class="navbar-holder d-flex align-items-center justify-content-between">
              <!-- Navbar Header-->
              <div class="navbar-header">
                <!-- Navbar Brand -->
                <a href="index-2.html" class="navbar-brand d-none d-sm-inline-block">
                  <div class="brand-text d-none d-lg-inline-block">
                    <span>Bootstrap</span>
                    <strong>Dashboard</strong>
                  </div>
                  <div class="brand-text d-none d-sm-inline-block d-lg-none">
                    <strong>BD</strong>
                  </div>
                </a>
                <!-- Toggle Button-->
                <a id="toggle-btn" href="#" class="menu-btn active">
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
              </div>
              <!-- Navbar Menu -->
              <ul class="nav-menu list-unstyled d-flex flex-md-row align-items-md-center">
                <!-- Search-->
                <li class="nav-item d-flex align-items-center">
                  <a id="search" href="#">
                    <i class="icon-search"></i>
                  </a>
                </li>
                <!-- Notifications-->
                <li class="nav-item dropdown">
                  <a
                    id="notifications"
                    rel="nofollow"
                    data-target="#"
                    href="#"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    class="nav-link"
                  >
                    <i class="fa fa-bell-o"></i>
                    <span class="badge bg-red badge-corner">12</span>
                  </a>
                  <ul aria-labelledby="notifications" class="dropdown-menu">
                    <li>
                      <a rel="nofollow" href="#" class="dropdown-item">
                        <div class="notification">
                          <div class="notification-content">
                            <i class="fa fa-envelope bg-green"></i>You have 6 new messages
                          </div>
                          <div class="notification-time">
                            <small>4 minutes ago</small>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a rel="nofollow" href="#" class="dropdown-item">
                        <div class="notification">
                          <div class="notification-content">
                            <i class="fa fa-twitter bg-blue"></i>You have 2 followers
                          </div>
                          <div class="notification-time">
                            <small>4 minutes ago</small>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a rel="nofollow" href="#" class="dropdown-item">
                        <div class="notification">
                          <div class="notification-content">
                            <i class="fa fa-upload bg-orange"></i>Server Rebooted
                          </div>
                          <div class="notification-time">
                            <small>4 minutes ago</small>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a rel="nofollow" href="#" class="dropdown-item">
                        <div class="notification">
                          <div class="notification-content">
                            <i class="fa fa-twitter bg-blue"></i>You have 2 followers
                          </div>
                          <div class="notification-time">
                            <small>10 minutes ago</small>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        rel="nofollow"
                        href="#"
                        class="dropdown-item all-notifications text-center"
                      >
                        <strong>view all notifications</strong>
                      </a>
                    </li>
                  </ul>
                </li>
                <!-- Messages                        -->
                <li class="nav-item dropdown">
                  <a
                    id="messages"
                    rel="nofollow"
                    data-target="#"
                    href="#"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    class="nav-link"
                  >
                    <i class="fa fa-envelope-o"></i>
                    <span class="badge bg-orange badge-corner">10</span>
                  </a>
                  <ul aria-labelledby="notifications" class="dropdown-menu">
                    <li>
                      <a rel="nofollow" href="#" class="dropdown-item d-flex">
                        <div class="msg-profile">
                          <img
                            src="../images/avatar-1.jpg"
                            alt="..."
                            class="img-fluid rounded-circle"
                          />
                        </div>
                        <div class="msg-body">
                          <h3 class="h5">Jason Doe</h3>
                          <span>Sent You Message</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a rel="nofollow" href="#" class="dropdown-item d-flex">
                        <div class="msg-profile">
                          <img
                            src="../images/avatar-2.jpg"
                            alt="..."
                            class="img-fluid rounded-circle"
                          />
                        </div>
                        <div class="msg-body">
                          <h3 class="h5">Frank Williams</h3>
                          <span>Sent You Message</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a rel="nofollow" href="#" class="dropdown-item d-flex">
                        <div class="msg-profile">
                          <img
                            src="../images/avatar-3.jpg"
                            alt="..."
                            class="img-fluid rounded-circle"
                          />
                        </div>
                        <div class="msg-body">
                          <h3 class="h5">Ashley Wood</h3>
                          <span>Sent You Message</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        rel="nofollow"
                        href="#"
                        class="dropdown-item all-notifications text-center"
                      >
                        <strong>Read all messages</strong>
                      </a>
                    </li>
                  </ul>
                </li>
                <!-- Languages dropdown    -->
                <li class="nav-item dropdown">
                  <a
                    id="languages"
                    rel="nofollow"
                    data-target="#"
                    href="#"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    class="nav-link language dropdown-toggle"
                  >
                    <img src="images/gb.png" alt="English" />
                    <span class="d-none d-sm-inline-block">English</span>
                  </a>
                  <ul aria-labelledby="languages" class="dropdown-menu">
                    <li>
                      <a rel="nofollow" href="#" class="dropdown-item">
                        <img src="../images/de.png" alt="English" class="mr-2" />German
                      </a>
                    </li>
                    <li>
                      <a rel="nofollow" href="#" class="dropdown-item">
                        <img src="../images/fr.png" alt="English" class="mr-2" />French
                      </a>
                    </li>
                  </ul>
                </li>
                <!-- Logout    -->
                <li class="nav-item">
                  <a href="login.html" class="nav-link logout">
                    <span class="d-none d-sm-inline">Logout</span>
                    <i class="fa fa-sign-out"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div class="page-content d-flex align-items-stretch">
        <!-- Side Navbar -->
        <nav class="side-navbar">
          <!-- Sidebar Header-->
          <div class="sidebar-header d-flex align-items-center">
            <div class="avatar">
              <img src="../images/avatar-1.jpg" alt="..." class="img-fluid rounded-circle" />
            </div>
            <div class="title">
              <h1 class="h4">Mark Stephen</h1>
              <p>Admin</p>
            </div>
          </div>
          <!-- Sidebar Navidation Menus-->
          <span class="heading">Main</span>
          <ul class="list-unstyled">
            <li class="active">
              <a href="index-2.html">
                <i class="icon-home"></i>Home
              </a>
            </li>
            <li>
              <a href="tables.html">
                <i class="icon-grid"></i>Tables
              </a>
            </li>
            <li>
              <a href="charts.html">
                <i class="fa fa-bar-chart"></i>Charts
              </a>
            </li>
            <li>
              <a href="forms.html">
                <i class="icon-padnote"></i>Forms
              </a>
            </li>
            <li>
              <a href="#exampledropdownDropdown" aria-expanded="false" data-toggle="collapse">
                <i class="icon-interface-windows"></i>Example dropdown
              </a>
              <ul id="exampledropdownDropdown" class="collapse list-unstyled">
                <li>
                  <a href="#">Page</a>
                </li>
                <li>
                  <a href="#">Page</a>
                </li>
                <li>
                  <a href="#">Page</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="login.html">
                <i class="icon-interface-windows"></i>Login page
              </a>
            </li>
          </ul>
          <span class="heading">Extras</span>
          <ul class="list-unstyled">
            <li>
              <a href="#">
                <i class="icon-flask"></i>Demo
              </a>
            </li>
            <li>
              <a href="#">
                <i class="icon-screen"></i>Demo
              </a>
            </li>
            <li>
              <a href="#">
                <i class="icon-mail"></i>Demo
              </a>
            </li>
            <li>
              <a href="#">
                <i class="icon-picture"></i>Demo
              </a>
            </li>
          </ul>
        </nav>
        <div class="content-inner">
          <!-- Page Header-->
          <header class="page-header">
            <div class="container-fluid">
              <h2 class="no-margin-bottom">Dashboard</h2>
            </div>
          </header>
          <!-- Dashboard Counts Section-->
          <section class="dashboard-counts no-padding-bottom">
            <div class="container-fluid">
              <div class="row bg-white has-shadow">
                <!-- Item -->
                <div class="col-xl-3 col-sm-6">
                  <div class="item d-flex align-items-center">
                    <div class="icon bg-violet">
                      <i class="icon-user"></i>
                    </div>
                    <div class="title">
                      <span>
                        Total
                        <br />Patients
                      </span>
                      <div class="progress">
                        <div
                          role="progressbar"
                          style="width: 25%; height: 4px;"
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          class="progress-bar bg-violet"
                        ></div>
                      </div>
                    </div>
                    <div class="number">
                      <strong>20</strong>
                    </div>
                  </div>
                </div>
                <!-- Item -->

                <!-- Item -->

                <!-- Item -->
              </div>
            </div>
          </section>
          <!-- Dashboard Header Section    -->
          <section class="dashboard-header">
            <div class="container-fluid">
              <div class="row">
                <!-- Statistics -->
                <div class="statistics col-lg-3 col-12">
                  <div class="statistic d-flex align-items-center bg-white has-shadow">
                    <div class="icon bg-No">
                      <i class="fa fa-tasks"></i>
                    </div>
                    <div class="text">
                      <strong>3</strong>
                      <br />
                      <small>have kidney infection at level</small>
                      <br />
                      <small>"No"</small>
                      <br />
                      <small>percentage: 15 %</small>
                    </div>
                  </div>
                  <div class="statistic d-flex align-items-center bg-white has-shadow">
                    <div class="icon bg-Low">
                      <i class="fa fa-tasks"></i>
                    </div>
                    <div class="text">
                      <strong>4</strong>
                      <br />
                      <small>have kidney infection at level</small>
                      <br />
                      <small>"Low"</small>
                      <br />
                      <small>percentage: 20 %</small>
                    </div>
                  </div>
                  <div class="statistic d-flex align-items-center bg-white has-shadow">
                    <div class="icon bg-Maybe">
                      <i class="fa fa-tasks"></i>
                    </div>
                    <div class="text">
                      <strong>3</strong>
                      <br />
                      <small>have kidney infection at level</small>
                      <br />
                      <small>"Maybe"</small>
                      <br />
                      <small>percentage: 15 %</small>
                    </div>
                  </div>
                  <div class="statistic d-flex align-items-center bg-white has-shadow">
                    <div class="icon bg-High">
                      <i class="fa fa-tasks"></i>
                    </div>
                    <div class="text">
                      <strong>5</strong>
                      <br />
                      <small>have kidney infection at level</small>
                      <br />
                      <small>"High"</small>
                      <br />
                      <small>percentage: 25 %</small>
                    </div>
                  </div>
                  <div class="statistic d-flex align-items-center bg-white has-shadow">
                    <div class="icon bg-ExtraHigh">
                      <i class="fa fa-tasks"></i>
                    </div>
                    <div class="text">
                      <strong>5</strong>
                      <br />
                      <small>have kidney infection at level</small>
                      <br />
                      <small>"EXtra High"</small>
                      <br />
                      <small>percentage: 25 %</small>
                    </div>
                  </div>
                </div>
                <!-- Pie chart            -->
                <div class="chart col-lg-8 col-12">
                  <div
                    class="line-chart bg-white d-flex align-items-center justify-content-center has-shadow"
                  >
                    <!-- <canvas id="lineChart"> -->
                    <TotalPieChart />
                    <!-- </canvas>      -->
                  </div>
                </div>
              </div>
            </div>
          </section>
          <!-- Projects Section-->
          <!-- Client Section-->
          <!-- Feeds Section-->
          <!-- Updates Section-->
          <!-- Page Footer-->
          <footer class="main-footer">
            <div class="container-fluid">
              <div class="row">
                <div class="col-sm-6">
                  <p>Your company &copy; 2017-2020</p>
                </div>
                <div class="col-sm-6 text-right">
                  <p>
                    Design by
                    <a
                      href="../external.html?link=https://bootstrapious.com/p/admin-template"
                      class="external"
                    >Bootstrapious</a>
                  </p>
                  <!-- Please do not remove the backlink to us unless you support further theme's development at https://bootstrapious.com/donate. It is part of the license conditions. Thank you for understanding :)-->
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
    <button
      type="button"
      data-toggle="collapse"
      data-target="#style-switch"
      id="style-switch-button"
      class="btn btn-primary btn-sm d-none d-md-inline-block"
    >
      <i class="fa fa-cog fa-2x"></i>
    </button>
    <div id="style-switch" class="collapse">
      <h5 class="mb-3">Select theme colour</h5>
      <form class="mb-3">
        <select name="colour" id="colour" class="form-control">
          <option value>select colour variant</option>
          <option value="default">violet</option>
          <option value="red">red</option>
          <option value="green">green</option>
          <option value="pink">pink</option>
          <option value="sea">sea</option>
          <option value="blue">blue</option>
        </select>
      </form>
      <p>
        <img src="../images/template-mac.png" alt class="img-fluid" />
      </p>
      <p
        class="text-muted text-small"
      >Stylesheet switching is done via JavaScript and can cause a blink while page loads. This will not happen in your production code.</p>
      <p>Do you want more components, SCSS sources and attribution-free version?</p>
      <p>
        <a
          href="../external.html?link=https://bootstrapious.com/p/admin-template-premium"
          class="btn btn-primary"
        >Get Premium version</a>
      </p>
    </div>
    <!-- JavaScript files-->
    <!-- <script src="images/jquery.min.js"></script>
    <script src="images/popper.min.js"> </script>
    <script src="images/bootstrap.min.js"></script>
    <script src="images/jquery.cookie.js"> </script>
    <script src="images/chart.min.js"></script>
    <script src="images/jquery.validate.min.js"></script>
    <script src="images/charts-home.js"></script>-->
    <!-- Main File-->
    <!-- <script src="images/front.js"></script> -->
  </div>
</template>

<script>
import { loadExternalJS_script } from "../utils/utils";
import TotalPieChart from "./TotalPieChart";
export default {
  data() {
    return {};
  },
  components: {
    TotalPieChart
  },
  mounted() {
    loadExternalJS_script("../images/jquery.min.js");
    loadExternalJS_script("../images/popper.min.js");
    loadExternalJS_script("../images/bootstrap.min.js");
    loadExternalJS_script("../images/jquery.cookie.js");
    loadExternalJS_script("../images/chart.min.js");
    loadExternalJS_script("../images/jquery.validate.min.js");
    loadExternalJS_script("../images/charts-home.js");
    loadExternalJS_script("../images/front.js");
  }
};
</script>

<style scoped lang="scss">
@import "../images/bootstrap.min.css";
@import "../images/custom.css";
@import "../images/font-awesome.min.css";
@import "../images/fontastic.css";
@import "../images/style.default.css";

.bg-No {
  background: #83dfe2 !important;
}

.bg-Low {
  background: #6b98e5 !important;
}

.bg-Maybe {
  background: #5ae885 !important;
}

.bg-High {
  background: #f53a14 !important;
}

.bg-ExtraHigh {
  background: #de14f5 !important;
}
</style>
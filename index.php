<?php 
  $themes = ['lightblue', 'orange', 'purple', 'navy'];
  $activeTheme = $themes[array_rand($themes)];
?>
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>MR S and MS M</title>
    <link rel="stylesheet" href="/assets/css/main.css">
  </head>
  <body class="home <?php echo $activeTheme; ?>">
    <div id="pageContainer">
      <header id="header">
        <div class="header-content">
          <h1 class="logo">
            <a href="/">MR S and MS M</a>
          </h1>
          <a href="#" class="mobile-nav-toggler">
            <span class="bar bar-top"></span>
            <span class="bar bar-middle"></span>
            <span class="bar bar-bottom"></span>
            <span class="text">Menu</span>
          </a>
        </div>
        <nav class="navigation">
          <ul class="nav" id="siteNavigation">
            <li class="nav-item">
              <a href="/news" class="nav-link">News</a>
            </li>
            <li class="nav-item last">
              <a href="/store" class="nav-link">Store</a>
            </li>
          </ul>
        </nav>
      </header>
      <main id="page">
        <?php echo 'this is the website.'; ?>
      </main>
      <?php include_once '/includes/ft.php'>
    </div>
  </body>
</html>

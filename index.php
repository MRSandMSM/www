<?php 
  $themes = ['lightblue', 'orange', 'purple', 'navy'];
  $activeTheme = $themes[array_rand($themes)];
?>
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>MR S and MS M | Official Website</title>
    <link rel="stylesheet" href="/assets/css/main.css">
  </head>
  <body class="home <?php echo $activeTheme; ?>">
    <div id="pageContainer">
      <?php include_once __DIR__ . '/includes/hd.php'; ?>
      <main id="page">
        <?php echo 'this is the website.'; ?>
      </main>
      <?php include_once __DIR__ . '/includes/ft.php'; ?>
    </div>
  </body>
</html>

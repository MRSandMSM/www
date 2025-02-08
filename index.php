<?php
  # $themes = ['lightblue', 'orange', 'purple', 'navy'];
  $activeTheme = /* $themes[array_rand($themes)]; */ 'orange';
?>
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>MR S and MS M | Official Website</title>
    <link rel="stylesheet" href="/assets/css/main.css">
    <link rel="stylesheet" href="/assets/css/themes/<?php echo $activeTheme; ?>.css">
    <link rel="stylesheet" href="/assets/css/homepage.css">
  </head>
  <body class="home <?php echo $activeTheme; ?>">
    <div id="pageContainer">
      <?php include __DIR__ . '/includes/hd.php'; ?>
      <main id="page">
        <?php echo 'this is the website. XILA.'; ?>
      </main>
      <?php include __DIR__ . '/includes/ft.php'; ?>
    </div>
    <?php include __DIR__ . '/includes/function/scripts.php'; ?>
    <script src="/assets/js/homepage.css"></script>
  </body>
</html>

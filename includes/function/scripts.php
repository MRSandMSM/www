<script src="/assets/js/jquery-1.8.3.min.js"></script>
    <script src="/assets/js/scripts.js"></script>
    <?php
    $request_uri = $_SERVER['REQUEST_URI'];
    if ($request_uri == '/' || $request_uri == '/index.php') {
      echo '<script src="/assets/js/homepage.js"></script>';
    } else {
      echo '<script src="/assets/js/interiors.js"></script>\n';
    }
    ?>

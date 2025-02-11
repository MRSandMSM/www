<?php
function build_menu($items, $id = null) {
    // Get the current page URL
    $current_url = $_SERVER['REQUEST_URI'];

    // Open the unordered list tag
    $menu = '<ul class="nav"' . ($id ? ' id="' . htmlspecialchars($id) . '"' : '') . '>';

    // Loop through each item in the items array
    $total_items = count($items); // Get the total number of items
    foreach ($items as $index => $item) {
        // Determine if it is the last item
        $is_last = ($index === $total_items - 1);

        // Check for the target attribute (default to empty if not set)
        $target = isset($item['target']) ? ' target="' . htmlspecialchars($item['target']) . '"' : '';

        // Check if the item has a sub-menu
        if (isset($item['sub_menu']) && is_array($item['sub_menu'])) {
            // If there's a sub-menu, make it a dropdown
            $menu .= '<li class="nav-item has-ultramenu' . (strpos($current_url, $item['url']) !== false ? ' active' : '') . ($is_last ? ' class="last"' : '') . '">';
            $menu .= '<a href="' . $item['url'] . '" class="nav-link"' . $target . '>' . $item['label'] . '</a>';
            $menu .= '<ul class="ultramenu">';

            foreach ($item['sub_menu'] as $sub_item) {
                // Check for the target attribute in sub-menu items
                $sub_target = isset($sub_item['target']) ? ' target="' . htmlspecialchars($sub_item['target']) . '"' : '';

                $menu .= '<li' . (strpos($current_url, $sub_item['url']) !== false ? ' class="active"' : '') . '>';
                $menu .= '<a href="' . $sub_item['url'] . '" class="nav-link"' . $sub_target . '>' . $sub_item['label'] . '</a></li>';
            }

            $menu .= '</ul></li>';
        } else {
            $menu .= '<li class="nav-item' . (strpos($current_url, $item['url']) !== false ? ' active' : '') . ($is_last ? ' last' : '') . '">';
            $menu .= '<a href="' . $item['url'] . '" class="nav-link"' . $target . '>' . $item['label'] . '</a></li>';
        }
    }

    // Close the unordered list tag
    $menu .= '</ul>';

    return $menu;
}
?>

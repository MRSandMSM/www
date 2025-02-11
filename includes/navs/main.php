<?php
include $_SERVER['DOCUMENT_ROOT'] .  '/includes/function/navs.php';

$menu_items = [
    [
        'label' => 'Home',
        'url' => '/home'
    ],
    [
        'label' => 'News',
        'url' => '/news'
    ],
    [
        'label' => 'Discography',
        'url' => '/discography'
    ],
    [
        'label' => 'Store',
        'url' => 'https://store.mrsandmsm.com/'
    ]
];

// Generate the menu with an ID
echo build_menu($menu_items, 'siteNavigation');
?>

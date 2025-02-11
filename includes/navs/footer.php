<?php
include $_SERVER['DOCUMENT_ROOT'] .  '/includes/function/navs.php';

$menu_items = [
    [
        'label' => 'Contact',
        'url' => '/contact'
    ],
    [
        'label' => 'Privacy',
        'url' => '/privacy'
    ],
    [
        'label' => 'Terms',
        'url' => '/terms'
    ],
    [
        'label' => 'Credits',
        'url' => '#siteCredits'
    ]
];

// Generate the menu with an ID
echo build_menu($menu_items, 'copyrightNavigation');
?>

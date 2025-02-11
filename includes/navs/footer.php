<?php
include $_SERVER['DOCUMENT_ROOT'] .  '/includes/function/navs.php';

$ftr_menu_items = [
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
echo build_menu($ftr_menu_items, 'copyrightNavigation');
?>

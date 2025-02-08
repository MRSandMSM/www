<?php
include __DIR__ . '/includes/function/navs.php';

$menu_items = [
    [
        'label' => 'Home',
        'url' => '/home'
    ],
    [
        'label' => 'About',
        'url' => '/about'
    ],
    [
        'label' => 'Services',
        'url' => '/services',
        'sub_menu' => [
            [
                'label' => 'Web Development',
                'url' => '/services/web-development'
            ],
            [
                'label' => 'SEO',
                'url' => '/services/seo'
            ]
        ]
    ],
    [
        'label' => 'Contact',
        'url' => '/contact'
    ]
];

// Generate the menu with an ID
echo build_menu($menu_items, 'siteNavigation');
?>

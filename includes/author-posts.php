<?php

function apt_author_posts_table_render_cb($atts)
{
    if (!is_user_logged_in()) {
        return '';
    }
    $userID = get_current_user_id();
    ob_start();
?>
<div 
     class="wp-block-apt-block-author-posts-table"
     id="apt-author-posts" 
     data-user-id="<?php echo $userID;?>"
     data-page-items="<?php echo $atts['pageItems'];?>"
     >
</div>

<?php
    $output = ob_get_contents();
    ob_end_clean();

    return $output;
}

UPDATE wp_micro_revisions SET user_action = replace(user_action, 'loja.camponutricao.com.br', 'paiol.camponutricao.com.br');

UPDATE wp_posts SET guid = replace(guid, 'loja.camponutricao.com.br','paiol.camponutricao.com.br'); 

UPDATE wp_posts SET post_content = replace(post_content, 'http://loja.camponutricao.com.br', 'https://paiol.camponutricao.com.br'); 

UPDATE wp_postmeta SET meta_value = replace(meta_value,'http://loja.camponutricao.com.br','https://paiol.camponutricao.com.br');

UPDATE wp_wc_admin_note_actions SET query = replace(query, 'http://loja.camponutricao.com.br','https://paiol.camponutricao.com.br'); 



UPDATE wp_options SET option_value = replace(option_value, 'http://loja.camponutricao.com.br', 'https://paiol.camponutricao.com.br') WHERE option_name = 'home' OR option_name = 'siteurl'; 

UPDATE wp_options SET option_value = replace(option_value, 'loja.camponutricao.com.br', 'paiol.camponutricao.com.br') WHERE option_name = 'mc_uri';

UPDATE wp_options SET option_value = replace(option_value, 'loja.camponutricao.com.br', 'paiol.camponutricao.com.br') WHERE option_name = 'Admin_custome_login_top';

UPDATE wp_options SET option_value = replace(option_value, 'loja.camponutricao.com.br', 'paiol.camponutricao.com.br') WHERE option_name = 'Admin_custome_login_logo';

UPDATE wp_options SET option_value = replace(option_value, 'loja.camponutricao.com.br', 'paiol.camponutricao.com.br') WHERE option_name = 'Admin_custome_login_Slidshow';

UPDATE wp_options SET option_value = replace(option_value, 'http://loja.camponutricao.com.br', 'https://paiol.camponutricao.com.br') WHERE option_name = 'theme_mods_whitedot';

UPDATE wp_options SET option_value = replace(option_value, 'loja.camponutricao.com.br', 'paiol.camponutricao.com.br') WHERE option_name = 'custom_login_design';

UPDATE wp_options SET option_value = replace(option_value, 'loja.camponutricao.com.br', 'paiol.camponutricao.com.br') WHERE option_name = 'theme_mods_master-blog';

UPDATE wp_options SET option_value = replace(option_value, 'loja.camponutricao.com.br', 'paiol.camponutricao.com.br') WHERE option_name = 'fs_accounts';

UPDATE wp_options SET option_value = replace(option_value, 'loja.camponutricao.com.br', 'paiol.camponutricao.com.br') WHERE option_name = 'Admin_custome_login_login'
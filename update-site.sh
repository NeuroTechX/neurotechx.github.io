git pull
rm -rf /var/www/neurotechx.com.backup
cp -r /var/www/neurotechx.com /var/www/neurotechx.com.backup
rm -rf /var/www/neurotechx.com/public_html /var/www/neurotechx.com/sf
cp -r sf /var/www/neurotechx.com/
cp -r public_html /var/www/neurotechx.com/

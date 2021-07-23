<?
$_POST = json_decode(file_get_contents("php://input"), true);
$phone = $_POST['phone'];
$name = $_POST['name'];


$referrer = $_POST['referrer'];	
$utm_source = $_POST['utm_source'];
$utm_medium = $_POST['utm_medium'];
$utm_campaign = $_POST['utm_campaign'];
$utm_content = $_POST['utm_content'];
$utm_term = $_POST['utm_term'];
$entry_point = 'https://renault-rolf-spb.ru/';
$user_agent = $_POST['user_agent'];
$gacid = $_POST['gacid'];
$refer = $_POST['entry_point'];
$utm_type = $_POST['utm_type'];
$apiak = 'd8d9bb40a6da937b';
$whash = '93805228f30b5cc32c922209c13384d1';
$siteLink = $_SERVER['SERVER_NAME'];


$text_to_manager = 'Посетитель заполнил форму на сайте';   
if ($utm_type == 'undefined' || $utm_type == undefined) {
	$url_vars = [
			'unique' => 'tandem',
			'apiak' => $apiak,
			'whash' => $whash,
			'tool_name' => 'Оставить заявку',
			'ga_client_id' => $gacid, 
			'ip_client' =>  $_SERVER['REMOTE_ADDR'],
			'calls' => [
					[
							'client' =>  $phone,                       
							'site' => $siteLink,
							'text_to_manager' => $text_to_manager,                
							'utm' => [                              
									'utm_source' => $utm_source,
									'utm_medium' => $utm_medium,
									'utm_campaign' => $utm_campaign,
									'utm_content' => $utm_content,
									'utm_term' => $utm_term,
									'entry_point' => $entry_point,
									'user_agent' => $user_agent
							],
					],
			],
	];
} else {
	$url_vars = [
			'unique' => 'tandem',
			'apiak' => $apiak,
			'whash' => $whash,
			'tool_name' => 'Оставить заявку',
			'ga_client_id' => $gacid, 
			'ip_client' =>  $_SERVER['REMOTE_ADDR'],
			'calls' => [
					[
							'client' =>  $phone,                       
							'site' => $siteLink,
							'text_to_manager' => $text_to_manager,                                      
							'utm' => [
									'utm_type' => $utm_type,
									'utm_source' => $utm_source,
									'utm_medium' => $utm_medium,
									'utm_campaign' => $utm_campaign,
									'utm_content' => $utm_content,
									'utm_term' => $utm_term,
									'entry_point' => $entry_point,
									'user_agent' => $user_agent
							],
					],
			],
	];
}


					$protocol = 'https://';
					$url = $protocol . 'api.callkeeper.ru/makeCalls?';
					$curl = curl_init($url);
					curl_setopt_array($curl, [
							CURLOPT_RETURNTRANSFER => true,
							CURLOPT_POST => true,
							CURLOPT_POSTFIELDS => http_build_query($url_vars),
					]);
					$response = curl_exec($curl);
					curl_close($curl);


					
require ('punycode.php');
$path = explode('?', $_SERVER['SERVER_NAME'].$_SERVER['REQUEST_URI']);
$IDN = new idna_convert();
$path = $IDN->decode($path[0]);
$maillist = array('EABelova@rolf.ru', 'aklipp@digitaladv.ru');
// $maillist = array('lp.dis7@digitaladv.ru');
$subject = 'Заявка с сайта Reno';

$message = '<div style="background:#ededed;font-family:Helvetica,Arial,sans-serif;margin:0;min-height:100%;height:100%;outline:none;padding:0;text-align:center" bgcolor="#ededed"><table width="100%" cellspacing="0" cellpadding="0" border="0" style="border-collapse:collapse;margin:0;padding:0" bgcolor="#ededed"><td bgcolor="#ededed" valign="top" style="border-collapse:collapse"><table width="590" border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;min-width:590px" align="center"><tbody><tr><td width="44" height="100" style="border-collapse:collapse;" bgcolor="#ededed" valign="top"></td></tr><tr><td width="44" height="60" style="border-collapse:collapse;min-width:44px;color:#222222;font-family:Arial,Helvetica,sans-serif;font-size:32px;font-weight:bold;line-height:22px;text-align:left;" bgcolor="#ededed" valign="top">';
$message .= $subject;
$message .= '</td></tr><tr><td width="44" style="border-collapse:collapse;min-width:44px;border-radius: 10px;" bgcolor="#ffffff" valign="top"><table width="100%" cellspacing="0" cellpadding="0" border="0" style="border-collapse:collapse;margin:0;padding:0"><tbody><tr><td width="50" height="35" style="border-collapse:collapse;min-width:50px;" valign="top"></td><td width="490" height="35" style="border-collapse:collapse;" valign="top"></td><td width="50" height="35" style="border-collapse:collapse;" valign="top"></td></tr><tr><td width="50" height="45" style="border-collapse:collapse;min-width:50px;" valign="top"></td><td width="44" height="45" style="border-collapse:collapse;min-width:50px;color:#616161;font-family:Arial,Helvetica,sans-serif;font-size:24px;font-weight:bold;line-height:22px;text-align:left;" valign="top">Информация о клиенте</td><td width="50" height="45" style="border-collapse:collapse;" valign="top"></td></tr><tr><td width="50" height="40" style="border-collapse:collapse;min-width:50px;" valign="top"></td><td width="44" height="40" style="border-collapse:collapse;min-width:50px;color:#616161;font-family:Arial,Helvetica,sans-serif;font-size:16px;font-weight:normal;line-height:22px;" valign="top"><table style="border-collapse:collapse;min-width:50px;color:#616161;font-family:Arial,Helvetica,sans-serif;font-size:16px;font-weight:normal;line-height:22px;"><tbody>';
if ($name != '') {
	$message .= '<tr><td width="100" height="40" style="font-weight: bold;text-align:left;">Имя:</td><td style="text-align:left;">';
	$message .= $name;
	$message .= '</td></tr>';
}
$message .= '<tr><td width="100" height="40" style="font-weight: bold;text-align:left;">Телефон:</td><td style="text-align:left;"><span class="wmi-callto">';
$message .= $phone;
$message .= '</span></td></tr></tbody></table></td><td width="50" height="40" style="border-collapse:collapse;" valign="top"></td></tr><tr><td width="50" height="35" style="border-collapse:collapse;min-width:50px;" valign="top"></td><td width="490" height="35" style="border-collapse:collapse;" valign="top"></td><td width="50" height="35" style="border-collapse:collapse;" valign="top"></td></tr></tbody></table></td></tr><tr><td width="44" height="25" style="border-collapse:collapse;" bgcolor="#ededed" valign="top"></td></tr><tr><td width="44" height="60" style="border-collapse:collapse;min-width:44px;color:#222222;font-family:Arial,Helvetica,sans-serif;font-size:16px;font-weight:bold;line-height:22px;" bgcolor="#ededed" valign="bottom"><table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;min-width:590px"><tbody><tr><td width="190" style="border-collapse:collapse;min-width:44px;color:#9e9e9e;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:normal;line-height:22px; text-align:left;">Адрес сайта:</td><td style="border-collapse:collapse;min-width:44px;color:#9e9e9e;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:normal;line-height:22px; text-align:left;">';
$message .= $path;
$message .= '</td></tr><tr><td width="190" style="border-collapse:collapse;min-width:44px;color:#9e9e9e;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:normal;line-height:22px; text-align:left;">Дата отправления:</td><td style="border-collapse:collapse;min-width:44px;color:#9e9e9e;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:normal;line-height:22px; text-align:left;">';
$message .= date("d.m.Y G:i");
$message .= '</td></tr><tr><td width="44" height="100" style="border-collapse:collapse;" bgcolor="#ededed" valign="top"></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div>';

require ('class.phpmailer.php');
$mail = new PHPMailer(); 
$mail->From = 'no-reply@'.$_SERVER['SERVER_NAME'];      // от кого 
$mail->FromName = '';   // от кого 
$mail->IsHTML(true);        // выставляем формат письма HTML 
$mail->Subject = $subject;  // тема письма 
$mail->Body = $message; 
foreach ($maillist as $mails) $mail->AddAddress($mails); 
if (!$mail->Send()) die ('Mailer Error: '.$mail->ErrorInfo);  
$mail->ClearAddresses();	
echo $_POST;
?>
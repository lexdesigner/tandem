<?php

error_reporting(E_ALL);
ini_set('display_errors', TRUE);
ini_set('display_startup_errors', TRUE);

	session_start();
	
	date_default_timezone_set('Europe/Moscow');

  header('Content-Type: text/html; charset=utf-8');
  
  $json = file_get_contents('php://input');
  $data = json_decode($json);

	$dealer = isset($_POST['dealer'])?$_POST['dealer']:'';
	$phone = $data->phone;
	$model = isset($_POST['model'])?$_POST['model']:'';
	$sitename = 'exeedrostokino.ru';

	$maillist = array('vkuntsevich@gmail.com');

	$subject = "Заявка с ".$sitename;

	if($phone) {

		require_once("tools/PHPMailer/class.phpmailer.php");
		require_once("tools/PHPMailer/PHPMailerAutoload.php");


		//Настройки SMTP-сервера
		$email = "no-reply@exeedrostokino.ru";
		$mail = new PHPMailer();
		//$mail->IsSMTP();
		//$mail->SMTPDebug = 2;
		//$mail->SMTPAuth = true;
		//$mail->SMTPSecure = "tls";
		//$mail->Host = "smtp.timeweb.ru";
		//$mail->Port = 25;
		//$mail->Username = $email;
		//$mail->Password = "kia123shu";
		
		$mail->CharSet = "utf-8";

		// Указываем отправителя
		$mail->SetFrom($email, $_SERVER['HTTP_HOST']);

//smtp.masterhost.ru
//пользователь smtp@avtopoint-mazda.ru
//пароль vKDDjpLf5l
 


		$email_body = "";
		//Формируем письмо
		$email_body = $email_body."<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>
                          <html xmlns='http://www.w3.org/1999/xhtml'>
                          <head>
                          <title>Заявка на звонок</title>
                          </head>
                          <body bgcolor='#f5f5f5' style='margin:0; padding:0; -webkit-font-smoothing:antialiased; -webkit-text-size-adjust:none;'>
                          <div>
                          <table width='100%' border='0' cellspacing='0' cellpadding='0'>
                            <tr>
                              <td align='center' bgcolor='#f4f5f5' style='margin:0; padding:0; -webkit-font-smoothing:antialiased; -webkit-text-size-adjust:none;'>
                                <table width='100%' border='0' cellspacing='0' cellpadding='0'>
                                  <tr>
                                    <td>
                                      <table width='100%' border='0' cellspacing='0' cellpadding='0'>
                                        <tr>
                                          <td align='center'>
                                            <table width='580' border='0' cellspacing='0' cellpadding='0'>
                                              <tr>
                                                <td align='center' style='font-family:arial,sans-serif; font-size:11px; line-height:15px; color:#989897; height:30px;'>
                                                </td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td align='center'>
                                            <table border='0' cellspacing='0' cellpadding='0'>
                                              <tr>
                                                <td bgcolor='#ffffff'>
                                                  <table width='600' border='0' cellspacing='0' cellpadding='0'>
                                                    <tr>
                                                      <td>
                                                        <table width='100%' border='0' cellspacing='0' cellpadding='0'>
                                                          <tr>
                                                            <td style='vertical-align:top;'>
                                                              <table width='100%' border='0' cellspacing='0' cellpadding='0'>
                                                                <tr>
                                                                  <td style='background-color:#666; height:50px; padding-left: 20px; font-size:18px; font-weight: bold; font-family:arial,sans-serif; line-height:20px; color:#ffffff;'>
                                                                  Клиент отправил заявку на сайте
                                                                  </td>
                                                                </tr>
                                                              </table>
                                                            </td>
                                                          </tr>
                                                        </table>
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td>
                                                        <table width='100%' border='0' cellspacing='0' cellpadding='0'>
                                                          <tr>
                                                            <td align='left' style='font-size:14px; font-family:arial,sans-serif; line-height:20px; color:#555555; vertical-align:bottom; font-weight:normal; padding-left: 20px; padding-right: 20px; padding-top: 10px;'>";
                                                              
                                                              $email_body = $email_body."<p style='font-size:18px; color:#666; font-weight:bold;'>Информация о клиенте</p>";
                                                              (!$_POST['department']) ?: $email_body = $email_body."<p style='font-size:14px; color:#555555; font-weight:bold;'>Отдел: <span style='font-size:16px; font-weight:bold;'>".trim($_POST['department'])."</span></p>";
                                                              (!$_POST['name']) ?: $email_body = $email_body."<p style='font-size:14px; color:#555555; font-weight:bold;'>Имя клиента: <span style='font-size:16px; font-weight:bold;'>".trim($_POST['name'])."</span></p>";
                                                              (!$phone) ?: $email_body = $email_body."<p style='font-size:14px; color:#555555; font-weight:bold;'>Телефон клиента: <span style='font-size:16px; font-weight:bold;'>".trim($phone)."</span></p>";
                                                              (!$_POST['clientEmail']) ?: $email_body = $email_body."<p style='font-size:14px; color:#555555; font-weight:bold;'>E-mail клиента: <span style='font-weight:normal;'>".trim($_POST['clientEmail'])."</span></p>";
                                                              
                                                              $email_body = $email_body."<p style='font-size:18px; color:#666; font-weight:bold;'>Информация о заявке</p>";
                                                              $email_body = $email_body."<p style='font-size:14px; color:#555555; font-weight:bold;'>Адрес сайта: <span style='font-weight:normal;'>http://".$_SERVER['HTTP_HOST']."</span></p>";
                                                              $email_body = $email_body."<p style='font-size:14px; color:#555555; font-weight:bold;'>Дата отправления: <span style='font-weight:normal;'>".date("d.m.Y H:i")."</span></p>";
                                                              $email_body = $email_body."
                                                            </td>
                                                          </tr>
                                                        </table>
                                                      </td>
                                                    </tr>
                                                  </table>
                                                </td>
                                              </tr>  
                                              <tr>
                                            <td height='30px'></td> 
                                          </tr>      
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </div>
                        </body>
                      </html>";


		//Список получателей писем
    $mail->AddAddress("e.filimonov@dilerchina.ru", "");
    $mail->AddAddress("v.lapshin@dilerchina.ru", "");
    $mail->AddAddress("p.gavrilov@dilerchina.ru", "");
    $mail->AddAddress("a.svetik@dilerchina.ru", "");
    $mail->AddAddress("marketing@dilerchina.ru", "");
    $mail->AddAddress("a.bogovik@dilerchina.ru", "");
    $mail->AddAddress("vkuntsevich@yandex.ru", "");

		$mail->Subject = "Клиент оставил заявку на сайте ".$_SERVER['HTTP_HOST'];

		$mail->MsgHTML($email_body);
		
/*
		if(time()-$_SESSION['sent'] < 60*60*24){
			echo "already";
			exit();
		}
*/
    


		if(!$mail->send()) {//
			die ('Mailer Error: '.$mail->ErrorInfo);  
		}else{
			$_SESSION['sent'] = time();
			echo "Ok";
    }
    
    $call_value = $_COOKIE['_ct_session_id']; /* ID сессии Calltouch, полученный из cookie */
    $ct_site_id = '40998';
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_HTTPHEADER, array("Content-type: application/x-www-form-urlencoded;charset=utf-8"));
    curl_setopt($ch, CURLOPT_URL,'https://api.calltouch.ru/calls-service/RestAPI/requests/'.$ct_site_id.'/register/');
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS,
      //"fio=".urlencode($_POST['name'])
      "&phoneNumber=".$phone
      //."&email=".$_POST['email']
      ."&subject=".urlencode('Заявка с сайта')
      ."".($call_value != 'undefined' ? "&sessionId=".$call_value : ""));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $calltouch = curl_exec ($ch);
    curl_close ($ch);
/*
        require 'class.phpmailer.php';  // подключаем файл с настройками подключения

        $mail = new PHPMailer(); 
		$mail->From = 'no-reply@'.$sitename;      // от кого 
		$mail->FromName = '';   // от кого  
		$mail->IsHTML(true);        // выставляем формат письма HTML 
		$mail->Subject = $subject;  // тема письма 
		$mail->Body = $msg_top; 	

		 // отправляем наше письмо 		
		foreach ($maillist as $mails) {   
			$mail->AddAddress($mails); // кому - адрес, Имя 
			if (!$mail->Send()) die ('Mailer Error: '.$mail->ErrorInfo);  
			$mail->ClearAddresses();
		}
*/
		
	}
?>
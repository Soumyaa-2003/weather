<?php
require_once "connect01.php";
$username = $mobile = $pass = "";
$username_err = $mobile_err = $pass_err = "";

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    if(empty(trim($_POST['username']))){
        $username_err = "Username can't be empty";
    }else{
        $sql = "SELECT id FROM signup WHERE username =  ?";
        $stmt = mysqli_prepare($conn , $sql);
        if($stmt){
            mysqli_stmt_bind_param($stmt ,"s" , $param_username);

            $param_username = trim($_POST['username']);
            
            if(mysqli_stmt_execute($stmt)){
                mysqli_stmt_store_result($stmt);
                if(mysqli_stmt_num_rows($stmt) == 1){
                    $username_err = "This username is already taken.";
                    echo "$username_err";

                }
                else{
                    $username = trim($_POST['username']);
                    header("location: signup.html");
                }
            }else{
                echo "Something went wrong. Please try again";
            }
        }
    }
    //mysqli_stmt_close($stmt);

if(empty(trim($_POST['mobile']))){
    $mobile_error = "Mobile number is required";
}else{
    $mobile = trim($_POST['mobile']);

}

if(empty(trim($_POST['pass']))){
    $pass_err = "Password cannot be empty";
}elseif(strlen(trim($_POST['pass'])) < 5){
    $pass_err = "Password must be at least 6 characters";
}else{
    $pass = trim($_POST['pass']);
}

if(empty($username_err) && empty($pass_err) && empty($mobile_err)){
    $sql = "INSERT INTO users (username, mobile, pass) VALUES ( ?, ? ,?)";
    $stmt = mysqli_prepare($conn, $sql);
    if($stmt){
        mysqli_stmt_bind_param($stmt, "sis", $param_username , $param_mobile , $param_pass);
        $param_username = $username;
        $param_mobile = $mobile;
        $param_pass = password_hash($pass, PASSWORD_DEFAULT);

        if(mysqli_stmt_execute($stmt)){
            header("location: signed.php");
        
        }
        else{
            echo " Something went wrong . Can't redirect";
        }
    }
    mysqli_stmt_close($stmt);
}
mysqli_close($conn);
}
?>


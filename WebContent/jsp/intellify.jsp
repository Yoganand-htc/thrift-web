<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<%-- <script language="javascript" src="${pageContext.request.contextPath}/js/thrift.min.js"></script> --%>
<script language="javascript" src="${pageContext.request.contextPath}/js/JavaSensor.js"></script>
<script language="javascript" src="${pageContext.request.contextPath}/js/CaliperEvent_types.js"></script>
</head>
<body>

	<h3>Click to send JSON request to server:</h3><button id="btn">Click</button>
    <script type="text/javascript">
     	document.getElementById("btn").addEventListener("click", postMessage, false);
    </script>
    <h2>Server Response: </h2>
    <div id="output"></div>
</body>
</html>
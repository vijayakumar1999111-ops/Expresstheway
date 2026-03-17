<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>AKC Sports & Cultural Day 2K26 | Student Registration</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: "Segoe UI", system-ui, sans-serif;
      background: radial-gradient(circle at top left, #1f7ae0, #050b1c 55%, #000000 100%);
      color: #f5f7ff;
      margin: 0;
      padding: 0;
    }
    .page-wrapper {
      max-width: 800px;
      margin: 0 auto;
      padding: 40px 20px;
    }
    h1 {
      text-align: center;
      font-size: 2.2em;
      margin-bottom: 20px;
      color: #ffe66d;
      text-shadow: 0 0 12px rgba(255,230,109,0.6);
    }
    form {
      background: rgba(5,10,35,0.7);
      padding: 30px;
      border-radius: 16px;
      box-shadow: 0 12px 30px rgba(0,0,0,0.6);
    }
    label {
      display: block;
      margin-bottom: 6px;
      font-size: 14px;
      font-weight: 600;
      color: #e0e6ff;
    }
    input, select, textarea {
      width: 100%;
      padding: 10px;
      margin-bottom: 18px;
      border-radius: 8px;
      border: none;
      font-size: 14px;
      background: rgba(255,255,255,0.1);
      color: #fff;
    }
    input:focus, select:focus, textarea:focus {
      outline: 2px solid #ffe66d;
    }
    .btn-submit {
      display: block;
      width: 100%;
      padding: 12px;
      background: linear-gradient(135deg, #ffe66d, #ffb347);
      color: #1a237e;
      font-weight: bold;
      font-size: 15px;
      border: none;
      border-radius: 999px;
      cursor: pointer;
      box-shadow: 0 10px 20px rgba(0,0,0,0.4);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .btn-submit:hover {
      filter: brightness(1.05);
      transform: translateY(-1px);
    }
  </style>
</head>
<body>
  <div class="page-wrapper">
    <h1>Student Registration</h1>
    <form action="submit_registration.php" method="POST">
      <label for="name">Full Name</label>
      <input type="text" id="name" name="name" required>

      <label for="school">School Name</label>
      <select id="school" name="school" required>
        <option value="">-- Select School --</option>
        <option>School of Technology</option>
        <option>School of Management</option>
        <option>Apollo Institute of Pharmaceutical Sciences</option>
        <option>School of Health Sciences</option>
        <option>Apollo College of Nursing</option>
        <option>Apollo Institute of Medical Sciences and Research</option>
      </select>

      <label for="gender">Gender</label>
      <select id="gender" name="gender" required>
        <option value="">-- Select Gender --</option>
        <option>Male</option>
        <option>Female</option>
      </select>

      <label for="event">Event / Game</label>
      <select id="event" name="event" required>
        <option value="">-- Select Event --</option>
        <option>Chess</option>
        <option>Carroms</option>
        <option>Badminton (Doubles)</option>
        <option>Table Tennis</option>
        <option>Volleyball</option>
        <option>Basketball</option>
        <option>Cricket</option>
        <option>Kabaddi</option>
        <option>Kho-Kho</option>
        <option>Football</option>
        <option>Throwball</option>
        <option>Tennikoit</option>
        <option>Athletics – Track</option>
        <option>Athletics – Field</option>
      </select>

      <label for="contact">Contact Number</label>
      <input type="tel" id="contact" name="contact" required>

      <label for="email">Email Address</label>
      <input type="email" id="email" name="email" required>

      <label for="notes">Additional Notes</label>
      <textarea id="notes" name="notes" rows="3"></textarea>

      <button type="submit" class="btn-submit">Register Now</button>
    </form>
  </div>
</body>
</html>

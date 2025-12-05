<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>IP Adress Tracker</title>
<h1>Your IP Adress is:</h1>
<h2>{ip}</h2>

<script>
    let ip = "Loading...";
    async function fetchIP() {
        try {
            const response = await fetch('/api/ip');
            const data = await response.json();
            ip = data.ip;
        } catch (error) {
            ip = "Error fetching IP";
        }
    }
    fetchIP();
</script>

<style>
  :root {
    font-family: Arial, sans-serif;
    text-align: center;
    background: linear-gradient(to right, #173997, #00ff44);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  ::selection {
    background: #00ffff;
    color: black;
  }

  h1 {
    font-size: 3em;
    margin-bottom: 0.5em;
  }

  h2 {
    font-size: 1.5em;
    border: 0.2cm solid white;
    border-radius: 10px 10px 10px 10px;
    background-color: white;
    color: black;
    box-shadow: -0.5em 0px 0.5em rgba(0,0,0,0.5);
  }

  @media (max-width: 700px) {
    h1 {
      font-size: 1.75em;
    }

    h2 {
      font-size: 1.1em;
      padding: 0.5em;
    }
  }

  @media (prefers-color-scheme: dark) {
    :root {
      background: linear-gradient(to right, #001f3f, #007700);
      color: white;
    }

    ::selection {
      background: white;
      color: black;
    }

    h2 {
      background-color: black;
      color: white;
      border-color: black;
      box-shadow: -0.5em 0px 0.5em rgba(255, 255, 255, 0.5);
      text-shadow: 0 0 0.5em #00ffff, 0 0 0.5em #00ffff, 0 0 0.5em #00ffff, 0 0 0.5em #00ffff;
    }
  }
</style>

# WA Mobile Logging Scripts

> [!IMPORTANT]
> You will need to use an Emulator or a Rooted Device, and we'll use Frida for logging.  
> **Note:** I will not cover how to set up Frida. I recommend watching this [video](https://www.youtube.com/watch?v=RXw-4TymR5s) for guidance.

## Tools Needed

- [JADX](https://github.com/skylot/jadx) to decompile the APK.
- [Frida](https://github.com/frida/frida) to log WhatsApp.
- Emulator or Rooted Device (this tutorial will use an Emulator).

## How to Log RECV Nodes

1. **Download WhatsApp APK**  
   Ensure the APK version matches the one installed on your Emulator (VERY IMPORTANT).

2. **Open APK in JADX**  
   Open the downloaded APK in JADX to begin decompiling.

3. **Search for the Correct Class**  
   In JADX, search for `ConnectionThreadRequestsImpl/presence/unavailable`.

![Open Inspector](../assets/search_recv_jadx.png)

4. **Open the Class**  
   When you find the search result, open the corresponding class.

5. **Find correct Names**
    The first you will replace in `Java.use()`, the last you will replace `A06`

![Open Inspector](../assets/classes_recv_jadx.png)

6. **Run the Script with Frida**  
   Execute the following command to run Frida and start logging:

   ```bash
   frida -U -f com.whatsapp -l path/to/script
   ```

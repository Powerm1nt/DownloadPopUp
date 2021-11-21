# contoso.com - Web


## Configuration

### Downloads links setup
> For setup the needed downloads links for the ui, you need to edit a json file located on ``/config/dllinks.json``.  

#### This is a example file of ``dllinks.json`` :

```json
{
  "x86_64": "https://example.com/public/installers/current/x86_64/Setup_x86_64.exe",
  "x86": "https://example.com/public/installers/current/x86/Setup_x86.exe",
  "universal" : "https://example.com/public/dists/current/dist.jar"
}
```

> 💡 You need to understand theses points :  
    - The key name corresponds to the runnable file for right CPU architecture.  
    - The value is the link which points to the program.

## Contributing and Building
For contributing, you need to :
- Fork the project
- Install NodeJS
- Install a good text editor (eg. **Sublime Text, VSCode of WebStorm**, not **MSNotepad** xD)
- Time and patience !

### For building :
``npm install`` & ``npm run build`` and **enjoy !**

### For testing :
``npm install`` & ``npm run start``

**Enjoy 😉**
# Anleitung zur Installation und Entwicklung

> **Wichtig**: Um mit diesem Projekt etwas sinnvolles anfangen zu können, benötigt man **NodeJS** und **npm**.

**Diese Schritte müssen befolgt werden, damit alles andere funktioniert:**

1. NodeJS (+npm) installieren
2. `git clone https://github.com/ortegamarcel/msi-react-git`
2. `npm install` - installiert alle Dependencies



## Dev Server starten

```npm start``` (in `/serien-finder`)



## Builden

```npm run build``` (in `/serien-finder`)

Bündelt alle JS-Dateien inkl. Dependencies zu einer Bundle-Datei. Der komplette output landet in `/serien-finder/build`. Ein Webserver benötigt lediglich diesen Ordner und sonst nichts.



## Deployen

Zum Deployed der App, gibt es mehrere Möglichkeiten. Entweder man startet den mitgelieferten Webserver lokal oder autmomatisiert in einem Docker Container.

### Webserver deployen

Bevor man den Webserver lokal starten kann, müssen die Webserver-Dependencies installiert werden:
```npm install``` (in `/webserver`)

> **Achtung**: Wenn noch kein Build durchgeführt wurde, muss das spätestens jetzt gemacht werden. 
> ```npm run build``` (in `/serien-finder`)

Jetzt muss man nur noch den letzten Build (`/serien-finder/build`) in `/webserver` kopieren und kann dann die `server.js` mit NodeJS starten.  Für das Kopieren und Starten gibt es den `webserver`-Befehl:

```npm run webserver``` (in `/serien-finder`)

> **Hinweis**: Der Server lauscht auf **Port 80**. Das heißt, dass dieser nicht auf dem Rechner/Server belegt sein darf.

### Webserver in Docker deployen

> **Wichtig**: Um in Docker deployen zu können, muss Docker auf dem Rechner installiert sein.

Mit `deploy` werden alle benötigten Dateien (`/serien-finder/build`) automatisch gebuildet und in `/webserver` kopiert. Dann wird ein neues Docker-Image erzeugt und anschießend gestartet.

```npm run deploy``` (in `/serien-finder`)

#### Häufige Fehler

Da bei jedem Deployen ein neuer Container erzeugt wird, kann es zu einem Error kommen, wenn ein alter Container noch vorhanden ist, der auf den selben Port gemappt ist. In diesem Fall muss man mit `docker rm -f <container_name>` den alten Container löschen. Die Cotnainer-Bezeichnung (`container_name`) kann man mit `docker ps -a` herausfinden. Alternativ können auch alle Container gelöscht werden: `docker rm -f $(docker ps -a -q)`

#### Port-Mapping
Der Webserver im Container lauscht auf den Port 80 und wird standardmäßig auf den **Port 80** gemappt. Um den Server-Port auf einen anderen Port zu mappen, muss man den `local_port` in `/serien-finder/package.json` editieren.

```
>// /serien-finder/package.json
>//...
>"config": {
>  "local_port": "80"
>},
>//...
```

> **Wichtig**: Der `local_port` ändert nicht den eigentlichen Server-Port, sonder nur das Mapping!



## Ports ändern

Der Server-Port kann nicht so ohne weiteres geändert werden. Weder `/webserver/server.js` noch die `package.json`-Skripte sind dafür parametrisiert. Wenn man den Port in `/webserver/server.js` ändert müssen auch die Skripte (`/serien-finder/package.json`) und `/webserver/Dockerfile` angepasst werden.

Wenn man den Webserver in einem Docker-Container laufen lässt, kann der gemappte Port, mit dem man auf den Server zugreift geändert werden. Wie das funktioniert steht im Kapitel `Webserver in Docker deployen` -> `Port-Mapping`.



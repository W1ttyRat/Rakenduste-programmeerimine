## Configuration

The backend uses these environment variables:

| Variable | Default | Description |
|---|---|---|
| `PORT` | `3000` | Port used by the HTTP server |
| `TASKS_FILE` | `./data/tasks.json` | JSON file used to save and load tasks |

Copy `.env.example` to `.env` to create local configuration:

```env
PORT=3000
TASKS_FILE=./data/tasks.json
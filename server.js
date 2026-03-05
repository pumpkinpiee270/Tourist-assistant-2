import express from 'express';
import cors from 'cors';
import OpenAI from 'openai';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post('/getAISuggestions', async (req, res) => {
    const { types, budget, duration } = req.body;

    const prompt = `
You are a travel assistant. Suggest 5 tourist attractions in Singapore based on:
Types: ${types.join(', ')}
Budget: ${budget}
Duration: ${duration}
Return a JSON array with name, type, description, duration.
`;

    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [{ role: "user", content: prompt }],
        });

        let text = completion.choices[0].message.content;
        let data;
        try { data = JSON.parse(text); }
        catch { data = [{ name: "Error parsing AI response", type: "-", description: text, duration: "-" }]; }

        res.json(data);

    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.listen(3000, () => console.log("Server running on port 3000"));
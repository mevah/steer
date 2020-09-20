from flask import Flask, request
import ktrain
from ktrain import text
import numpy as np

app = Flask(__name__)

@app.route('/json-example', methods=['GET','POST']) #GET requests will be blocked

def json_example():
    req_data = request.get_json()
    
#define fields
    topics = req_data["topics"] #topics to be discussed, the last one should be other
    texts = req_data["text"] #all the text in the order of speech
    people = req_data["people"] #people who talked the texts in the order of speech

	##Find off-topic text 
	#create offtopic binary array for each text
    off_topic= []
        #create zeroshotclassifier
    zsl = text.ZeroShotClassifier()
        #go through texts and find the topics
    for i in texts:
        doc = i
        scores= zsl.predict(doc, labels=topics, include_labels=False)
        if scores[-1] > 0.5 or np.array(scores)[0:-1].max() < 0.5:
            off_topic.append(1)
        else:
            off_topic.append(0)

        #percentage of text that is off topic
    off= np.sum(np.array(off_topic))/ len(off_topic)

##Create summaries for the whole text
    #create summarizer
    ts = text.TransformerSummarizer()
    #create concatenated text to be summarized
    text_for_summarize= " ".join(texts)
    #get summary
    summary= ts.summarize(text_for_summarize)


    return off_topic, summary
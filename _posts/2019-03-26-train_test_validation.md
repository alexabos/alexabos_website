---
layout: post
title:  "Must-know data science concepts: Test, train, validation sets"
date:   2020-03-26
desc: "Must-know data science concepts: Test, train, validation sets"
keywords: "datathon,data science,personal experience,challenge"
categories: [data science]
tags: [cross-validation,data science]
icon: icon-html
comments: true

---
<p style="text-align: justify;">
The evaluation of models is a problematic issue in machine learning. Given a supervised algorithm, a model might fit perfectly a particular training data, but then fail completely when applied to additional sets: This phenomenon is defined as overfitting (Burnham K Anderson D, Model Selection and Multimodel Inference). For example, if we use complicated algorithms with lots of elements, the model will be very specific for the features of the training data while it will likely perform worse in unseen data (Hawkins adm 04).
</p>
<p style="text-align: justify;">
A common approach to avoid overfitting and make the model more generalizable to unseen data is dividing you labeled dataset in two subsets: training and test set (Ripley B 07 Pattern recognition and neural networks). The training set is used to build and fit the parameters of the model whereas the test set is used to evaluate its performance (i.e. - accuracy). However, in most cases, this split is usually not enough, as most models have hyperparameters (e.g., kernel functions in SVMs, depth of a random forest tree, etc.) or architectures considerations that need to be evaluated as well. In this context, if the training dataset is large enough, a validation set can be also used. After fitting the parameters (i.e. – weights) of the algorithm in the training set, the validation set is used to tune the parameters (i.e. - architecture) and the test set is employed to assess the performance of the fully-trained algorithm (i.e., generalization and predictive power). As it can be observed, the validation set shows a dual function, it is training data used by testing, but neither as part of the low-level training nor as part of the final testing.
</p>
<p style="text-align: justify;">
When the training dataset is not large enough so one cannot afford to hold out part of the data only for validation/test purposes, cross-validation (CV) techniques are frequently applied (Ripley B 07 Pattern recognition and neural networks). CV consists on resampling the dataset to simulate the train/validation/test partition. In a simple case, in k-fold cross-validation, the available dataset is divided into k equal folds, and at each iteration, a different fold is used as test while the training of the models is performed on the remaining k-1 folds. Thus, the average of performance on all k fold is the overall performance of the model. A particular case of k-fold is leave-one-out technique, where k is the number of observations, i.e. – in each iteration, the test set is only one observation whereas the training set has N-1 samples. In complex situations (e.g. hyperparameters need to be tuned), nested-CV is employed (Figure X), which requires an outer k-fold CV loop to split the data intro training and test sets, and an inner loop used to select the model on the training fold, equivalent to the train/validation partition. In conclusion, cross-validation is a good strategy to control overfitting when the size of the dataset is an issue (e.g.- biomedical research).
</p>
<br> <br>
<p align="center">
<img src="/alexabos_website/static/assets/img/blog/train_test_validation/train_test_validation.png" width="50%" height="50%">
</p>
<br> <br>
<p style="text-align: justify;">
Additionally, overfitting can also be avoid by using regularization (Goodfellow I, Deep Learning, 2016). The simplest and most common regularization method adds penalty as the complexity of the model increases. The regularization method penalizes higher terms of the equation; thus their importance decreases and the model leads to a less complex equation.
</p>

{% include comments.html %}

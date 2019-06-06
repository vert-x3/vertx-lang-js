#!/usr/bin/env bash

if [ -z "$1" ]
  then
    echo "Usage: js_to_java_test_gen [js_filename]"
    echo "js_filename must be inside src/test/resources/"
    exit
fi

pattern="function test([a-zA-Z0-9]*)\(\)"

echo "@Override protected String getTestFile() { return \"${1}\"; }"
echo ""

while IFS= read -r line;
do
    [[ ${line} =~ $pattern ]]
    if [[ ${BASH_REMATCH[1]} ]]
    then
        testName="${BASH_REMATCH[1]}"
        echo "@Test public void test${testName}() throws Exception { runTest(); }"
        echo ""
    fi
done < src/test/resources/$1

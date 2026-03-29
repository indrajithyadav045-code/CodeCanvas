const APP_STATE = {
    courses: {
        python: {
            id: 'python',
            name: 'Python Masterclass',
            color: 'var(--py-color)',
            icon: 'ph-file-py',
            description: 'Learn Python from scratch. Master data science, scripting, and web backends.',
            lessons: [
                {
                    id: 'py-1',
                    title: 'Variables and Data Types',
                    duration: '10 min',
                    content: `
                        <p>Python is dynamically typed, which means you don't have to declare the type of a variable when you create one. Think of a variable as a name attached to a particular object.</p>
                        <h3>Declaring Variables</h3>
                        <p>In Python, you simply assign a value to a variable name using the equals sign (<code>=</code>).</p>
                        <pre><code class="language-python"># Integer
age = 25

# Float
price = 19.99

# String
name = "CodeCanvas"

# Boolean
is_learning = True

print(f"Hello, {name}! You are {age} years old.")</code></pre>
                        <h3>Common Data Types</h3>
                        <ul>
                            <li><strong>int</strong>: Whole numbers</li>
                            <li><strong>float</strong>: Decimal numbers</li>
                            <li><strong>str</strong>: Text characters</li>
                            <li><strong>bool</strong>: True or False</li>
                        </ul>
                    `
                },
                {
                    id: 'py-2',
                    title: 'Control Flow (If/Else)',
                    duration: '15 min',
                    content: `
                        <p>Control flow allows your program to make decisions based on conditions.</p>
                        <pre><code class="language-python">score = 85

if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
else:
    print("Grade: C or below")</code></pre>
                    `
                }
            ]
        },
        c: {
            id: 'c',
            name: 'C Programming',
            color: 'var(--c-color)',
            icon: 'ph-file-c',
            description: 'Dive deep into system-level programming and memory management.',
            lessons: [
                {
                    id: 'c-1',
                    title: 'Introduction & Hello World',
                    duration: '5 min',
                    content: `
                        <p>C is a powerful procedural language. Every C program must have a <code>main()</code> function.</p>
                        <pre><code class="language-c">#include &lt;stdio.h&gt;

int main() {
    printf("Hello, World!\\n");
    return 0;
}</code></pre>
                    `
                },
                {
                    id: 'c-2',
                    title: 'Pointers Demystified',
                    duration: '20 min',
                    content: `
                        <p>A pointer is simply a variable that stores the memory address of another variable.</p>
                        <pre><code class="language-c">#include &lt;stdio.h&gt;

int main() {
    int num = 42;
    int *ptr = &num; // ptr holds the address of num

    printf("Value of num: %d\\n", num);
    printf("Address of num: %p\\n", ptr);
    printf("Value via pointer: %d\\n", *ptr); // Dereferencing
    
    return 0;
}</code></pre>
                    `
                }
            ]
        },
        cpp: {
            id: 'cpp',
            name: 'Modern C++',
            color: 'var(--cpp-color)',
            icon: 'ph-file-cpp',
            description: 'Object-oriented programming and standard template library.',
            lessons: [
                {
                    id: 'cpp-1',
                    title: 'Classes and Objects',
                    duration: '15 min',
                    content: `
                        <p>C++ introduces Object-Oriented Programming to C. A class is a blueprint for objects.</p>
                        <pre><code class="language-cpp">#include &lt;iostream&gt;
using namespace std;

class Car {
public:
    string brand;
    int year;

    void honk() {
        cout &lt;&lt; "Beep beep!\\n";
    }
};

int main() {
    Car myCar;
    myCar.brand = "Tesla";
    myCar.year = 2026;
    
    cout &lt;&lt; myCar.brand &lt;&lt; " " &lt;&lt; myCar.year &lt;&lt; "\\n";
    myCar.honk();
    return 0;
}</code></pre>
                    `
                }
            ]
        },
        java: {
            id: 'java',
            name: 'Java Development',
            color: 'var(--java-color)',
            icon: 'ph-coffee',
            description: 'Write once, run anywhere. Enterprise-grade application building.',
            lessons: [
                {
                    id: 'java-1',
                    title: 'Java Architecture',
                    duration: '12 min',
                    content: `
                        <p>Java code is compiled into bytecode, which runs on the Java Virtual Machine (JVM).</p>
                        <pre><code class="language-java">public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, Java Universe!");
    }
}</code></pre>
                    `
                }
            ]
        },
        dsa: {
            id: 'dsa',
            name: 'Data Structures & Alg (DSA)',
            color: 'var(--dsa-color)',
            icon: 'ph-tree-structure',
            description: 'Crack coding interviews by mastering algorithms and data structures.',
            lessons: [
                {
                    id: 'dsa-1',
                    title: 'Two Sum Problem',
                    duration: '25 min',
                    content: `
                        <p><strong>Problem:</strong> Given an array of integers <code>nums</code> and an integer <code>target</code>, return indices of the two numbers such that they add up to <code>target</code>.</p>
                        <h3>Approach: Hash Map</h3>
                        <p>We can solve this in O(N) time complexity by storing differences in a Hash Map as we iterate through the array.</p>
                        <pre><code class="language-java">class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>(); // val -> index
        
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            
            if (map.containsKey(complement)) {
                return new int[] { map.get(complement), i };
            }
            
            map.put(nums[i], i);
        }
        return new int[]{};
    }
}</code></pre>
                    `
                }
            ]
        }
    }
};

const appDiv = document.getElementById('app');

// Component: Navigation Bar
const renderNav = () => `
    <nav>
        <a href="#" class="logo">
            <i class="ph-bold ph-code"></i> CodeCanvas
        </a>
        <div class="nav-links">
            <a href="#" class="nav-link">Home</a>
            <a href="#courses/python" class="nav-link">Python</a>
            <a href="#courses/dsa" class="nav-link">DSA</a>
        </div>
    </nav>
`;

// Render Home Page
function renderHome() {
    const courseCards = Object.values(APP_STATE.courses).map(course => `
        <div class="course-card ${course.id}-card" onclick="window.location.hash='courses/${course.id}'">
            <div class="course-icon">
                <i class="${course.icon}"></i>
            </div>
            <h3>${course.name}</h3>
            <p>${course.description}</p>
        </div>
    `).join('');

    appDiv.innerHTML = `
        ${renderNav()}
        <section class="hero">
            <h1>Level up your coding <span class="highlight">skills</span></h1>
            <p>Interactive, premium content to master Python, C/C++, Java, and Data Structures & Algorithms. Built for developers by developers.</p>
            <a href="#courses/python" class="btn btn-primary">Start Learning Now <i class="ph-bold ph-arrow-right"></i></a>
        </section>
        
        <h2 style="text-align: center; margin-bottom: 3rem;">Choose Your Path</h2>
        <div class="course-grid">
            ${courseCards}
        </div>
    `;
}

// Render Course List Page
function renderCourse(courseId) {
    const course = APP_STATE.courses[courseId];
    if (!course) {
        window.location.hash = '';
        return;
    }

    const lessonItems = course.lessons.map((lesson, idx) => `
        <div class="lesson-item" onclick="window.location.hash='lesson/${course.id}/${lesson.id}'">
            <div style="display: flex; gap: 1rem; align-items: center;">
                <div style="background: rgba(255,255,255,0.1); border-radius: 50%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; font-weight: bold; color: ${course.color}">
                    ${idx + 1}
                </div>
                <h3>${lesson.title}</h3>
            </div>
            <div class="lesson-meta">
                <span><i class="ph ph-clock"></i> ${lesson.duration}</span>
                <i class="ph-bold ph-caret-right"></i>
            </div>
        </div>
    `).join('');

    appDiv.innerHTML = `
        ${renderNav()}
        <a href="#" class="back-btn"><i class="ph-bold ph-arrow-left"></i> Back to Courses</a>
        
        <div class="page-header">
            <div style="display: flex; align-items: center; gap: 1.5rem;">
                <i class="${course.icon} course-icon" style="color: ${course.color}; font-size: 4rem;"></i>
                <div>
                    <h1 style="margin-bottom: 0.5rem; font-size: 3rem;">${course.name}</h1>
                    <p style="margin-bottom: 0;">${course.description}</p>
                </div>
            </div>
        </div>

        <div class="lesson-list">
            ${lessonItems}
        </div>
    `;
}

// Render Lesson Detail Page
function renderLesson(courseId, lessonId) {
    const course = APP_STATE.courses[courseId];
    if (!course) return;

    const lesson = course.lessons.find(l => l.id === lessonId);
    if (!lesson) return;

    appDiv.innerHTML = `
        ${renderNav()}
        <a href="#courses/${course.id}" class="back-btn"><i class="ph-bold ph-arrow-left"></i> Back to ${course.name}</a>
        
        <div class="lesson-content">
            <span class="language-tag" style="color: ${course.color}; border: 1px solid ${course.color}">${course.name}</span>
            <h2>${lesson.title}</h2>
            ${lesson.content}
            
            <div style="margin-top: 4rem; display: flex; justify-content: space-between; border-top: 1px solid var(--card-border); padding-top: 2rem;">
                <button class="btn btn-outline" onclick="history.back()"><i class="ph-bold ph-caret-left"></i> Previous</button>
                <button class="btn btn-primary">Complete & Continue <i class="ph-bold ph-check"></i></button>
            </div>
        </div>
    `;

    // Trigger Prism syntax highlighting after DOM update
    setTimeout(() => {
        if (window.Prism) {
            window.Prism.highlightAll();
        }
    }, 0);
}

// Simple Hash Router Engine
function router() {
    const hash = window.location.hash.slice(1);
    
    if (hash === '' || hash === '/') {
        renderHome();
    } else if (hash.startsWith('courses/')) {
        const courseId = hash.split('/')[1];
        renderCourse(courseId);
    } else if (hash.startsWith('lesson/')) {
        const parts = hash.split('/');
        const courseId = parts[1];
        const lessonId = parts[2];
        renderLesson(courseId, lessonId);
    } else {
        renderHome();
    }
}

// Initialize Router
window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', router);

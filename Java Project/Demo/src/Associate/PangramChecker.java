package Associate;

public class PangramChecker {
	
	    public static boolean isPangram(String str) {
	        
	        boolean[] alphabet = new boolean[26];

	       
	        str = str.toLowerCase();

	        for (int i = 0; i < str.length(); i++) {
	            char ch = str.charAt(i);
	            if (ch >= 'a' && ch <= 'z') {
	                alphabet[ch - 'a'] = true;
	            }
	        }

	        for (boolean isPresent : alphabet) {
	            if (!isPresent) {
	                return false;  
	            }
	        }

	        return true;
	    }

	    public static void main(String[] args) {
	        String input = "The quick brown fox jumps over the lazy dog ";
	        boolean isPangram = isPangram(input);
	        if (isPangram) {
	            System.out.println("The input is a pangram.");
	        } else {
	            System.out.println("The input is not a pangram.");
	        }
	    }
	}



